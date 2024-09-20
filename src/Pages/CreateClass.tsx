import styled from "styled-components";
import { Header } from "../Components/Header";
import { ClassCard } from "../Components/ClassCard";

export const CreateClass = () => {
    return (
        <Wrapper>
            <Header />
            <TitleWrapper>
                <p>개설된 수학 클래스</p>
                <Button>클래스 개설</Button>
            </TitleWrapper>
            <Line />
            <ContentWrapper>
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
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
    gap: 606px;
    margin-top: 171px;
    > p {
        font-weight: 600;
        font-size: 42px;
    }
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

const Line = styled.div`
    margin-top: 40px;
    width: 1040px;
    height: 1px;
    background-color: #414142;
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 100px;
`;
