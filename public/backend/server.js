const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

mongoose.connect('mongodb://localhost:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  googleId: String,
});

const User = mongoose.model('User', userSchema);

const client = new OAuth2Client('35768457097-iuf1kr8p1cehe54a73n6cj5jjv3dh845.apps.googleusercontent.com');

passport.use(new GoogleStrategy({
  clientID: '35768457097-iuf1kr8p1cehe54a73n6cj5jjv3dh845.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/oauth2callback'
},
async (token, tokenSecret, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = new User({
        fullName: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      await user.save();
    }
    return done(null, user);
  } catch (error) {
    console.error('Error in GoogleStrategy:', error);
    return done(error, null);
  }
}));

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '35768457097-iuf1kr8p1cehe54a73n6cj5jjv3dh845.apps.googleusercontent.com'
    });
    const { name, email, sub } = ticket.getPayload();
    let user = await User.findOne({ googleId: sub });
    if (!user) {
      user = new User({
        fullName: name,
        email: email,
        googleId: sub
      });
      await user.save();
    }
    res.status(200).send({ message: 'Login successful', loggedInUser: user });
  } catch (error) {
    console.error('Error in /api/google-login:', error);
    res.status(400).send('Error logging in with Google');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the SecureDev API');
});

app.post('/api/register', async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists with this email');
    }
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error in /api/register:', error);
    res.status(400).send('Error registering user');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).send('Invalid email or password');
    }
    res.status(200).send({ message: 'Login successful', loggedInUser: user });
  } catch (error) {
    console.error('Error in /api/login:', error);
    res.status(400).send('Error logging in');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});