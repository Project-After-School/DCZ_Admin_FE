export type createNoticeRequest = {
    title: string;
    content: string;
    grade: string[];
    class_num: string[];
};

export interface getNoticeResponse {
    title: string;
    date: string;
    id: number;
    major: string;
}

export interface getNoticeDetailResponse {
    title: string;
    content: string;
    grade: string[];
    class_num: string[];
    id: number;
    author_id: string;
    author_name: string;
    date: string;
}

export interface updateNoticeRequest {
    title: string;
    content: string;
    grade: string[];
    class_num: string[];
}

export interface updateNoticeResponse {
    title: string;
    content: string;
    grade: string[];
    class_num: string[];
    id: number;
    author_id: string;
    author_name: string;
    date: string;
}

export interface createCommentResponse {
    id: number;
    content: string;
    date: string;
    author_id: string;
    notification_id: number;
    author_type: string;
}

export interface getCommentResponse {
    id: number;
    content: string;
    date: string;
    author_id: string;
    notification_id: number;
    author_type: string;
    author_name: string;
}
