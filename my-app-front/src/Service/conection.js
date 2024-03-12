import axios from "axios";

const api = await axios.create({
    baseURL: "http://localhost:3005/",
    timeout: 50000,
});

export default api;