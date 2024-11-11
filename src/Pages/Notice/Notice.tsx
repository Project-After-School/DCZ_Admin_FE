import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { SubHeader } from "../../Components/Common/SubHeader";
import { NoticeList } from "../../Components/Notice/NoticeList";
import { Link } from "react-router-dom";

export const Notice = () => {
    return (
        <Wrapper>
            <Header />
            <TitleWrapper>
                <Text>공지 리스트 (클래스룸 명)</Text>
                <ClassName>2학년 2반</ClassName>
            </TitleWrapper>
            <Line />
            <MiddleWrapper>
                <SubHeader />
                <ButtonStyleLink to="/notice/upload">
                    <Button>공지 만들기</Button>
                </ButtonStyleLink>
            </MiddleWrapper>
            <ListWrapper>
                <NoticeList />
                <NoticeList />
                <NoticeList />
            </ListWrapper>
        </Wrapper>
    );
};

const ButtonStyleLink = styled(Link)`
    margin-left: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 171px;
  width: 100%;
  max-width: 1040px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 42px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ClassName = styled.p`
  font-weight: 600;
  font-size: 32px;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Line = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 1040px;
  height: 1px;
  background-color: #414142;
  margin-bottom: 28px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1040px;
  margin-bottom: 36px;
  padding: 0 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Button = styled.button`
  width: 123px;
  height: 53px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid #00d4ff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #00d4ff;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
