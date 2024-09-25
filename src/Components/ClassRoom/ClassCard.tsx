import styled from "styled-components";
import { Link } from "react-router-dom";
import People from "../../Assets/People.svg";
import HomeWork from "../../Assets/HomeWork.svg";

export const ClassCard = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <img src={People} />
                <p>2학년 2반</p>
            </ContentWrapper>
            <Link to={"/homework"}>
                <ClassRoomName>클래스룸 이름</ClassRoomName>
            </Link>
            <Line />
            <ContentWrapper>
                <img src={HomeWork} />
                <p>현재 제출중인 과제</p>
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: calc(100% - 40px);
    height: 149px;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #414142;
    border-radius: 16px;
    gap: 20px;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    > p {
        font-weight: 600;
        font-size: 20px;
    }
`;

const ClassRoomName = styled.p`
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
`;

const Line = styled.div`
    width: 100%;
    background-color: #414142;
    height: 1px;
`;
