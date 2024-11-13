import instance from "../axios";
import { createNoticeRequest, noticeList } from "./type";

export const createNotice = async (data: createNoticeRequest) => {
    return await instance.post("/admin/post_notification", data);
};

export const getNotice = async () => {
    return await instance.get<noticeList[]>("/get_notification_all_admin");
};
