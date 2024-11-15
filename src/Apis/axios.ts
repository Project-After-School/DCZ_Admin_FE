import axios from "axios";
import { Cookie } from "../Utils/Cookie";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const token = Cookie.get("access_token");
        if (token) config.headers.Authorization = `bearer ${token}`;
        return config;
    },
    (err) => {
        alert("오류 발생");
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        console.log(err);
    }
);

export default instance;
