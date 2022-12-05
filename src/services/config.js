import axios from "axios";

export const api = "http://localhost:3000";
export const http = axios.create({
  baseURL: api,
});
