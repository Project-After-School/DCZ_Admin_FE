import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { Input } from "../../Components/Common/Input";
import { TextArea } from "../../Components/Common/TextArea";
import { Button } from "../../Components/Common/Button";
import { CheckClass } from "../../Components/HomeWork/CheckClass";
import { createNotice } from "../../Apis/notice/notice";
import { createNoticeRequest } from "../../Apis/notice/type";
import { useNavigate } from "react-router-dom";

export const NoticeUpload: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [grade, setGrade] = useState<string[]>([]);
    const [classNum, setClassNum] = useState<string[]>([]);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data: createNoticeRequest = {
                title: title,
                content: content,
                grade: grade,
                class_num: classNum,
            };
            await createNotice(data);
            navigate("/notice");
        } catch (error) {
            console.error("공지 업로드 실패: ", error);
        }
    };

    const handleGradeChange = (newGrade: string[]) => {
        setGrade(newGrade);
    };

    const handleClassNumChange = (newClassNums: string[]) => {
        setClassNum(newClassNums);
    };

    useEffect(() => {
        setIsDisabled(!(title && content && grade.length > 0 && classNum.length > 0));
    }, [title, content, grade, classNum]);

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
                    <ContentWrapper>
                        <Input
                            label="공지 제목"
                            placeholder="제목을 입력해주세요."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextArea
                            label="공지 내용"
                            height="188px"
                            placeholder="공지 내용을 입력해주세요."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <CheckClass onChangeClassNum={handleClassNumChange} onChangeGrade={handleGradeChange} />
                        <ButtonWrapper>
                            <Button disabled={isDisabled} content="공지 업로드" />
                        </ButtonWrapper>
                    </ContentWrapper>
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
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 1040px;
    @media (max-width: 1200px) {
        width: 800px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 90px;
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
    justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 54px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    gap: 60px;
`;
