import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { Text, ClassName } from "./HomeWorkList";
import { TextArea } from "../../Components/Common/TextArea";
import { Input } from "../../Components/Common/Input";
import { Button } from "../../Components/Common/Button";
import { ChooseDate } from "../../Components/HomeWork/ChooseDate";
import { useState, useEffect } from "react";
import Delete from "../../Assets/Delete.svg";
import { CheckClass } from "../../Components/HomeWork/CheckClass";

export const CreateHomeWork = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [submitForm, setSubmitForm] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
        } else {
            setFiles([]);
        }
    };

    const handleDeleteFile = (index: number) => {
        setFiles((preveFiles) => preveFiles.filter((_, i) => i !== index));
    };

    const handleDatesChange = (start: Date | null, end: Date | null) => {
        setStartDate(start);
        setEndDate(end);
    };

    useEffect(() => {
        if (title && content && submitForm && files.length > 0 && startDate && endDate) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [title, content, submitForm, files, startDate, endDate]);

    return (
        <Wrapper>
            <Header />
            <Container>
                <TitleWrapper>
                    <Text>새로운 과제</Text>
                    <ClassName>2학년 2반</ClassName>
                </TitleWrapper>
                <Line />
                <ContentWrapper>
                    <DateWrapper>
                        <p>과제 기간</p>
                        <ChooseDateWrapper>
                            <ChooseDate onDatesChange={handleDatesChange} />
                        </ChooseDateWrapper>
                    </DateWrapper>
                    <Input
                        label="제목"
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextArea
                        label="과제 내용"
                        height="156px"
                        placeholder="과제 내용을 입력해주세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <TextArea
                        label="제출 양식"
                        height="88px"
                        placeholder="제출 양식을 입력해주세요."
                        value={submitForm}
                        onChange={(e) => setSubmitForm(e.target.value)}
                    />
                    <FileWrapper>
                        <FileContainer>
                            <p>파일 양식</p>
                            <FileAddButton onClick={() => document.getElementById("fileInput")?.click()}>
                                파일 추가
                            </FileAddButton>
                            <FileInput id="fileInput" type="file" multiple onChange={handleFileChange} />
                        </FileContainer>
                        {files.length > 0 && (
                            <SelectedFileWrapper>
                                {files.map((file, index) => (
                                    <SelectedFile key={index}>
                                        <FileName>{file.name}</FileName>
                                        <DeleteIcon src={Delete} onClick={() => handleDeleteFile(index)} />
                                    </SelectedFile>
                                ))}
                            </SelectedFileWrapper>
                        )}
                    </FileWrapper>
                    <CheckClass />
                    <ButtonWrapper>
                        <div>
                            <Button to="/homework" disabled={isDisabled} content="과제 업로드" />
                        </div>
                    </ButtonWrapper>
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

const Line = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 1px;
    background-color: #414142;
    margin-bottom: 60px;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 171px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    width: 100%;
    margin-bottom: 100px;
`;

const DateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    > p {
        font-weight: 500;
        font-size: 18px;
    }
`;

const ChooseDateWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const FileWrapper = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    width: calc(100% - 48px);
    align-items: center;
    border: 1px solid #414142;
    border-radius: 16px;
    height: 100%;
`;

const FileContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    > p {
        font-size: 20px;
        font-weight: 600;
    }
`;

const FileAddButton = styled.button`
    width: 107px;
    height: 53px;
    background-color: none;
    border-radius: 12px;
    border: 1px solid #00d4ff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    margin-left: auto;
    color: #00d4ff;
`;

const FileInput = styled.input`
    display: none;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    > div {
        margin-left: auto;
    }
`;

const SelectedFileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    width: 100%;
`;

const SelectedFile = styled.div`
    width: calc(100% - 40px);
    height: 60px;
    background-color: #414142;
    border-radius: 8px;
    padding-right: 20px;
    display: flex;
    padding-left: 20px;
    align-items: center;
`;

const FileName = styled.p`
    font-weight: 500;
    font-size: 18px;
    background-color: #414142;
`;

const DeleteIcon = styled.img`
    background-color: #414142;
    margin-left: auto;
    cursor: pointer;
`;
