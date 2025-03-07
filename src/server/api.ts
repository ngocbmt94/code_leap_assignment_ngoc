import axios from "axios";

// Create an instance of axios with default settings
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.VITE_API_DOG_KEY,
  },
});
