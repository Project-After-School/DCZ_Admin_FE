import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { SubHeader } from "../../Components/Common/SubHeader";
import { NoticeList } from "../../Components/Notice/NoticeList";

export const Notice = () => {
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
        <Button>공지 만들기</Button>
      </MiddleWrapper>
      <ListWrapper>
        <NoticeList />
        <NoticeList />
        <NoticeList />
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
  height: 1080px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 171px;
  width: calc(1040px - 48px);
  justify-content: space-between;
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
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1040px;
  margin-bottom: 36px;

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
`;

const ListWrapper = styled.div`
  width: calc(1040px - 48px);
  display: flex;
  flex-direction: column;
`;