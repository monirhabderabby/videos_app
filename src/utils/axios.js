import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lws-server-updated.herokuapp.com",
});

export default axiosInstance;
