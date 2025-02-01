// App.js
import React from 'react';
import LoginForm from "./pages/loginForm.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/common/Layout";
import Home from "./pages/Home.jsx";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Instructor } from "./pages/Instructor";
import { About } from "./pages/About";
import LogoPage from './pages/LogoPage'; // Import the LogoPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><LoginForm /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogSinglePage /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/instructor" element={<Layout><Instructor /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/logo" element={<LogoPage />} /> {/* New Logo Page */}
      </Routes>
    </Router>
  );
};

export default App;
