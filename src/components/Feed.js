/* src/components/Feed.js */
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/Api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const data = await fetchPosts();
      setPosts(data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
    };
    fetchAndSetPosts();
    const interval = setInterval(fetchAndSetPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
