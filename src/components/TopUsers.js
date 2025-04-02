/* src/components/TopUsers.js */
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api/Api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      const sortedUsers = data.map(user => ({
        ...user,
        postCount: user.posts.length,
      })).sort((a, b) => b.postCount - a.postCount);
      setUsers(sortedUsers.slice(0, 5));
    });
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.postCount} Posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
