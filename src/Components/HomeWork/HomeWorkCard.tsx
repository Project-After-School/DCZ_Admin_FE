import styled from "styled-components";
import People from "../../Assets/People.svg";
import { Link } from "react-router-dom";
import GrayPeople from "../../Assets/GrayPeople.svg";

interface DateProps {
    status: "remain" | "end";
}

export const HomeWorkCard: React.FC<DateProps> = ({ status }) => {
    const imageSrc = status === "remain" ? People : GrayPeople;

    return (
        <Wrapper>
            <DDay status={status}>{status === "remain" ? "D-4" : "기간 만료"}</DDay>
            <Link to={"/homework/detail"}>
                <HomeWorkTitle status={status}>수학 포스터 만들어서 제출하기</HomeWorkTitle>
            </Link>
            <ContentWrapper>
                <img src={imageSrc} />
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

const DDay = styled.p<DateProps>`
    font-size: 24px;
    font-weight: 600;
    color: ${({ status }) => (status === "remain" ? "#00B9FF" : "#B8B8B8")};
`;

const HomeWorkTitle = styled.p<DateProps>`
    font-weight: 600;
    font-size: 32px;
    color: ${({ status }) => (status === "remain" ? "white" : "#B8B8B8")};
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
