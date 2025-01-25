import React from 'react';
import LoginForm from "./pages/loginForm.jsx"; // Import as default
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/common/Layout";
import Home from "./pages/Home.jsx"; // Import as default
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";//internship page
import { Instructor } from "./pages/Instructor";
import { About } from "./pages/About";

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
      </Routes>
    </Router>
  );
};

export default App;