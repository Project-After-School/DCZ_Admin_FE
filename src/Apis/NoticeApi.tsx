import axios from "axios";
import { baseURL } from "./api";

export const NoticeApi = async (title: string, content: string): Promise<any> => {
    try {
        const response = await axios.post(`${baseURL}/admin/post_notification`, {
            title: title,
            content: content
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("응답 오류:", error.response.data);
        } else {
            console.error("요청 오류:", error.message);
        }
    }
};
