/* src/api/api.js */
import axios from "axios";

const API_BASE_URL = "http://test-server-api.com"; // Replace with actual API endpoint

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};
