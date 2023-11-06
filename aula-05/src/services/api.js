import axios from "axios";

const api = axios.create({
  baseURL: "https://6542c27001b5e279de1f8a8c.mockapi.io/",
});

export default api;
