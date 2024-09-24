import styled from "styled-components";
import Comment from "../../Assets/Comment.svg";
import { FeedBackComment } from "./FeedBackComment";
import { useRef, useEffect, useState } from "react";

export const FeedBack = () => {
    const [feedback, setFeedback] = useState("");
    const feedBackEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (feedBackEndRef.current) {
            feedBackEndRef.current.scrollTop = feedBackEndRef.current.scrollHeight;
        }
    }, [feedback]);

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>피드백</Title>
                <ExplainText>작성자와 관리자만 열람 가능합니다</ExplainText>
            </TitleWrapper>
            <ContentWrapper ref={feedBackEndRef}>
                <FeedBackComment />
                <FeedBackComment />
                <FeedBackComment />
                <FeedBackComment />
                <FeedBackComment />
                <FeedBackComment />
            </ContentWrapper>
            <InputWrapper>
                <input placeholder="피드백 달기" />
                <img src={Comment} alt="보내기" style={{ marginLeft: "auto", cursor: "pointer" }} />
            </InputWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: calc(100% - 44px);
    height: 380px;
    border: 1px solid #414142;
    border-radius: 16px;
    padding: 24px 20px 20px 20px;
    display: flex;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

const ExplainText = styled.p`
    color: #d4d4d4;
    font-weight: 500;
    font-size: 14px;
`;

const ContentWrapper = styled.div`
    margin-top: 24px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    display: flex;
    margin-top: auto;
    > input {
        width: calc(204px - 32px);
        height: 14px;
        background-color: #414142;
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 12px;
        font-weight: 400;
    }
`;
