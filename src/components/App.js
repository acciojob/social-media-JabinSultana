import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetail from "./PostDetail";
import './../styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Hello world", user: "User1", reactions: [0,0,0,0,0] }
  ]);

  return (
    <div className="App">
      {/* Do not remove the main div */}

      <Router>
        <nav>
          <a href="/">Posts</a>
          <a href="/users">Users</a>
          <a href="/notifications">Notifications</a>
        </nav>

        <Routes>
          <Route path="/" element={<Posts posts={posts} setPosts={setPosts} />} />
          <Route path="/users" element={<Users posts={posts} />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
