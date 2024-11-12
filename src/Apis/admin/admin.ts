import instance from "../api";
import { LoginRequest } from "./type";

const router = "/admin";

export const adminLogin = async (data: LoginRequest) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    return await instance.post(`${router}/login`, formData);
};
