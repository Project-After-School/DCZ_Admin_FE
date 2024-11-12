import instance from "../axios";
import { createNoticeRequest } from "./type";

export const createNotice = async (data: createNoticeRequest) => {
    return await instance.post("/admin/post_notification", data);
};
