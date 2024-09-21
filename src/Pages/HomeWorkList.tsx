import styled from "styled-components";
import { Header } from "../Components/Header";
import { SubHeader } from "../Components/SubHeader";
import { HomeWorkCard } from "../Components/HomeWorkCard";

export const HomeWorkList = () => {
    return (
        <Wrapper>
            <Header />
            <TitleWrapper>
                <Text>과제 제출 (클래스룸 명)</Text>
                <ClassName>2학년 2반</ClassName>
            </TitleWrapper>
            <Line />
            <MiddleWrapper>
                <SubHeader />
                <Button>과제 만들기</Button>
            </MiddleWrapper>
            <ContentWrapper>
                <HomeWorkCard />
                <HomeWorkCard />
                <HomeWorkCard />
                <HomeWorkCard />
                <HomeWorkCard />
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 526px;
    margin-top: 171px;
`;

export const Text = styled.p`
    font-weight: 600;
    font-size: 42px;
`;

export const ClassName = styled.p`
    font-weight: 600;
    font-size: 32px;
`;

const Line = styled.div`
    margin-top: 40px;
    width: 1040px;
    height: 1px;
    background-color: #414142;
    margin-bottom: 28px;
`;

const MiddleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 1040px;
    margin-bottom: 36px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    margin-bottom: 100px;
`;

const Button = styled.button`
    width: 123px;
    height: 53px;
    background-color: none;
    border-radius: 12px;
    border: 1px solid #00d4ff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: #00d4ff;
    margin-left: auto;
`;
