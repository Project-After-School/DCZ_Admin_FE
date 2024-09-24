import styled from "styled-components";
import { QandAComment } from "./QandAComment";

export const QandA = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Q&A</Title>
                <ExplainText>작성자와 관리자만 열람 가능합니다.</ExplainText>
            </TitleWrapper>
            <QandAComment />
            <QandAComment />
            <QandAComment />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 100px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
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
