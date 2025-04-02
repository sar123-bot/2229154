/* src/components/TrendingPosts.js */
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/Api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      let maxComments = Math.max(...data.map(post => post.comments.length));
      setPosts(data.filter(post => post.comments.length === maxComments));
    });
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <span>{post.comments.length} Comments</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
