import axios from "axios";

export const api = "https://oraculo-back.vercel.app/";
export const http = axios.create({
  baseURL: api,
});
