import styled from "styled-components";
import { QandAComment } from "./QandAComment";
import { createComment, getComment } from "../../Apis/notice/notice";
import React, { useState, useEffect } from "react";
import { getCommentResponse } from "../../Apis/notice/type";

interface QandAProps {
    notificationId: number;
}

export const QandA = ({ notificationId }: QandAProps) => {
    const [comments, setComments] = useState<getCommentResponse[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getComment(notificationId);
                setComments(response.data);
            } catch (error) {
                console.error("댓글 조회 오류:", error);
            }
        };
        fetchComments();
    }, [notificationId]);

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Q&A</Title>
                <ExplainText>작성자와 관리자만 열람 가능합니다.</ExplainText>
            </TitleWrapper>
            {comments.map((comment) => (
                <QandAComment key={comment.id} comment={comment} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 100px;
    width: 100%;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 280px;
`;

const Title = styled.p`
    font-weight: 600;
    font-size: 24px;
`;

const ExplainText = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #d4d4d4;
`;
