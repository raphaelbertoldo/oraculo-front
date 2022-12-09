import axios from "axios";

export const api = "https://api-oraculo.up.railway.app";
export const http = axios.create({
  baseURL: api,
});
