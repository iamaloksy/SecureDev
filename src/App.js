// App.js
import React from 'react';
import LoginForm from "./pages/loginForm.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/common/Layout";
import Home from "./pages/Home.jsx";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { Resources } from "./pages/Resources.jsx";
import { INTERNSHIP } from "./pages/Internship.jsx";
import { Services } from "./pages/Services.jsx";
import { About } from "./pages/About";
import LogoPage from './pages/LogoPage'; // Import the LogoPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><LoginForm /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogSinglePage /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        <Route path="/internship" element={<Layout><INTERNSHIP /></Layout>} />
        <Route path="/service" element={<Layout><Services /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/logo" element={<LogoPage />} /> {/* New Logo Page */}
      </Routes>
    </Router>
  );
};

export default App;
