import axios from "axios";

const headers: any = {};

if (localStorage.getItem("token")) {
  headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
}

export const http = axios.create({
  headers,
  baseURL: "https://cards-marketplace-api.onrender.com/",
});
