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
