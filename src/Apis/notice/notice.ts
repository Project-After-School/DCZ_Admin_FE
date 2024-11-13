import instance from "../axios";
import {
    createNoticeRequest,
    getNoticeDetailResponse,
    getNoticeResponse,
    updateNoticeRequest,
    updateNoticeResponse,
} from "./type";

export const createNotice = async (data: createNoticeRequest) => {
    return await instance.post("/admin/post_notification", data);
};

export const getNotice = async () => {
    return await instance.get<getNoticeResponse[]>("/get_notification_all_admin");
};

export const getNoticeDetail = async (notificationId: number) => {
    return await instance.get<getNoticeDetailResponse>(`/get_notification_detail?notification_id=${notificationId}`);
};

export const deleteNotice = async (notificationId: number) => {
    return await instance.delete(`/admin/delete_notification?notification_id=${notificationId}`);
};

export const updateNotice = async (notificationId: number, data: updateNoticeRequest) => {
    return await instance.put<updateNoticeResponse>(
        `/admin/update_notification?notification_id=${notificationId}`,
        data
    );
};
