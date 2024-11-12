import axios from "axios";
import { Cookies } from "react-cookie";

export const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 3000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
    (config) => {
        const accessToken = cookies.get("access_token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        return Promise.reject(error);
    }
);

export default instance;
