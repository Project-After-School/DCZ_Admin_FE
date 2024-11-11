import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { Input } from "../../Components/Common/Input";
import { TextArea } from "../../Components/Common/TextArea";
import { Button } from "../../Components/Common/Button";
<<<<<<< Updated upstream
import { CheckClass } from "../../Components/HomeWork/CheckClass";

export const NoticeUpload = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <TitleWrapper>
                    <Text>공지 업로드</Text>
                    <ClassName>2학년 2반</ClassName>
                </TitleWrapper>
                <Line />
                <ContentWrapperContainer>
                    <ContentWrapper>
                        <Input label="제목" placeholder="제목을 입력해주세요." />
                    </ContentWrapper>
                    <ContentWrapper>
                        <TextArea label="제출 양식" height="188px" placeholder="제출 양식을 입력해주세요." />
                    </ContentWrapper>
                    <CheckClass />
                </ContentWrapperContainer>
                <ButtonWrapper>
                    <Button to="/notice" content="과제 업로드" />
                </ButtonWrapper>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 171px;
    width: calc(1040px - 48px);
    position: relative;
`;

const Line = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 1px;
    background-color: #414142;
    margin-bottom: 60px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ContentWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
`;

const ButtonWrapper = styled.div`
    position: relative;
    top: 60px;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 100px;
=======
import { NoticeApi } from "../../Apis/NoticeApi";

export const NoticeUpload: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await NoticeApi(title, content);
    if (result) {
      alert("공지사항이 성공적으로 생성되었습니다.");
    }
  };

  const classes: string[] = [
    "1학년 1반", "1학년 2반", "1학년 3반", "1학년 4반",
    "2학년 1반", "2학년 2반", "2학년 3반", "2학년 4반",
    "3학년 1반", "3학년 2반", "3학년 3반", "3학년 4반",
  ];

  const handleClassChange = (className: string) => {
    setSelectedClasses((prev) =>
      prev.includes(className)
        ? prev.filter((c) => c !== className)
        : [...prev, className]
    );
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <TitleWrapper>
          <Title>공지 업로드</Title>
          <ClassName>2학년 1반</ClassName>
        </TitleWrapper>
        <Line />
        <Form onSubmit={handleSubmit}>
          <Label>공지 제목</Label>
          <Input 
            placeholder="제목을 입력해주세요." 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
          <Label>공지 내용</Label>
          <TextArea
            height="188px"
            placeholder="공지 내용을 입력해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <ClassSelection>
            <Label>대상 반 선택</Label>
            {classes.map((className) => (
              <CheckboxWrapper key={className}>
                <input 
                  type="checkbox" 
                  checked={selectedClasses.includes(className)} 
                  onChange={() => handleClassChange(className)} 
                />
                <span>{className}</span>
              </CheckboxWrapper>
            ))}
          </ClassSelection>
          <ButtonWrapper>
            <Button content="공지 업로드" />
          </ButtonWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 600px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top:90px;
`;

const Title = styled.h1`
  margin: 0;
`;

const ClassName = styled.h2`
  margin: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #414142;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const ClassSelection = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  max-height: 200px;
  overflow-y: auto;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
>>>>>>> Stashed changes
`;
