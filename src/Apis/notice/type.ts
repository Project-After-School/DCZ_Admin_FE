export type createNoticeRequest = {
    title: string;
    content: string;
    grade: string[];
    class_num: string[];
};

export interface noticeList {
    title: string;
    date: string;
    id: number;
    major: string;
}
