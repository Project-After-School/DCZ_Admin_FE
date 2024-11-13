import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { SubHeader } from "../../Components/Common/SubHeader";
import { HomeWorkCard } from "../../Components/HomeWork/HomeWorkCard";
import { Link } from "react-router-dom";

export const HomeWorkList = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <TitleWrapper>
                    <Text>과제 제출 (클래스룸 명)</Text>
                    <ClassName>2학년 2반</ClassName>
                </TitleWrapper>
                <Line />
                <MiddleWrapper>
                    <SubHeader />
                    <ButtonStyleLink to={"/homework/create"}>
                        <Button>과제 만들기</Button>
                    </ButtonStyleLink>
                </MiddleWrapper>
                <ContentWrapper>
                    <HomeWorkCard status="remain" />
                    <HomeWorkCard status="end" />
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Container = styled.div`
    width: 1040px;
    @media (max-width: 1200px) {
        width: 800px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 171px;
    width: 100%;
`;

export const Text = styled.p`
    font-weight: 600;
    font-size: 42px;
`;

export const ClassName = styled.p`
    font-weight: 600;
    font-size: 32px;
    margin-left: auto;
`;

const Line = styled.div`
    margin-top: 40px;
    width: 1040px;
    height: 1px;
    background-color: #414142;
    margin-bottom: 28px;
    @media (max-width: 1200px) {
        width: 800px;
    }
`;

const MiddleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 36px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    width: 100%;
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
`;

const ButtonStyleLink = styled(Link)`
    margin-left: auto;
`;
