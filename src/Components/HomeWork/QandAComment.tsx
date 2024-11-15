import styled from "styled-components";
import Comment from "../../Assets/Comment.svg";
import { getCommentResponse } from "../../Apis/notice/type";

interface QandACommentProps {
    comment: getCommentResponse;
}

export const QandAComment = ({ comment }: QandACommentProps) => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <ProfileImg />
                <p>{comment.author_name}</p>
            </ProfileWrapper>
            <Content>{comment.content}</Content>
            <InputWrapper>
                <input placeholder="답변하기" />
                <img src={Comment} alt="보내기" style={{ marginLeft: "auto", cursor: "pointer" }} />
            </InputWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 12px);
    height: 100%;
    padding: 12px;
    border: 1px solid #414142;
    border-radius: 8px;
    gap: 16px;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    > p {
        font-weight: 500;
        font-size: 16px;
    }
`;

const ProfileImg = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: black;
`;

const Content = styled.p`
    font-weight: 500;
    font-size: 14px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    > input {
        width: calc(220px - 32px);
        height: 14px;
        background-color: #414142;
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 12px;
        font-weight: 400;
    }
`;
