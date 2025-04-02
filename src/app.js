/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";
import FeedPage from "./pages/FeedPage";
import "./styles/tailwind.css";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/top-users">Top Users</Link>
        <Link to="/trending-posts">Trending Posts</Link>
        <Link to="/feed">Live Feed</Link>
      </nav>
      <Routes>
        <Route path="/top-users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
