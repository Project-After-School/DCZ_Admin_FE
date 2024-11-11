import styled from "styled-components";
import { useState } from "react";
import { Header } from "../../Components/Common/Header";
import Setting from "../../Assets/Setting.svg";
import { QandA } from "../../Components/HomeWork/QandA";
import { Line } from "../ClassRoom/ClassList";
import { EditModal } from "../../Components/Modal/EditModal";

export const NoticeDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Header />
        <MainContainer>
          <ContentContainer>
            <TitleWrapper>
              <p>수학 수행평가 안내</p>
              <img
                src={Setting}
                alt="설정"
                onClick={handleIconClick}
                style={{ cursor: "pointer" }}
              />
            </TitleWrapper>
            <Date>9월 4일</Date>
            <Line />
            <Content>
              내일 모레 수학 수행평가 봅니다. 이번 과제는
              ㅇ루리ㅣ리ㅜ리무리ㅓㅜ리ㅜ리ㅜ러ㅜ루미뤄루ㅏㅜ라ㅁ내일 모레 수학
              수행평가 봅니다. 이번 과제는
              ㅇ루리ㅣ리ㅜ리무리ㅓㅜ리ㅜ리ㅜ러ㅜ루미뤄루ㅏㅜ라ㅁ내일 모레 수학
              수행평가 봅니다. 이번 과제는
              ㅇ루리ㅣ리ㅜ리무리ㅓㅜ리ㅜ리ㅜ러ㅜ루미뤄루ㅏㅜ라ㅁ
            </Content>
          </ContentContainer>
          <QandAContainer>
            <QandA />
          </QandAContainer>
        </MainContainer>
      </Wrapper>
      {isModalOpen && <EditModal closeModal={closeModal} />}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 90px;
  width: 100%; 
  max-width: 1040px; 
  @media (max-width: 1200px) {
    width: 90%; 
  }
`;

const ContentContainer = styled.div`
    width:1000px;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 10px; 
  }
`;

const QandAContainer = styled.div`
  flex: 1;
  margin-top: 79px;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 10px; 
    margin-top: 20px; 
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0; 
  > p {
    font-size: 32px;
    font-weight: 600;
    margin-right: auto;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

const Date = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 24px;
  align-self: flex-start;
  display: flex;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #b8b8b8;
  @media (max-width: 768px) {
    font-size: 14px; 
  }
`;
