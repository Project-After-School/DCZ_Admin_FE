import styled from "styled-components";
import People from "../Assets/People.svg";

export const HomeWorkCard = () => {
    return (
        <Wrapper>
            <DDay>D-4</DDay>
            <HomeWorkTitle>수학 포스터 만들어서 제출하기</HomeWorkTitle>
            <ContentWrapper>
                <img src={People} />
                <p>과제 제출 12/16</p>
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: calc(1040px - 48px);
    height: calc(187px - 48px);
    border-radius: 12px;
    border: 1px solid #414142;
    gap: 24px;
`;

const DDay = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #00b9ff;
`;

const HomeWorkTitle = styled.p`
    font-weight: 600;
    font-size: 32px;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    > p {
        font-weight: 500;
        font-size: 20px;
        color: #b8b8b8;
    }
`;
