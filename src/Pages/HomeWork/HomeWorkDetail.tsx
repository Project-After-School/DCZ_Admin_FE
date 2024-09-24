import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import Setting from "../../Assets/Setting.svg";
import { Line } from "../ClassRoom/ClassList";
import DownLoad from "../../Assets/DownLoad.svg";
import { CompleteHomeWork } from "../../Components/HomeWork/CompleteHomeWork";
import { InCompleteHomeWork } from "../../Components/HomeWork/InCompleteHomeWork";
import { QandA } from "../../Components/HomeWork/QandA";
import { EditModal } from "../../Components/Modal/EditModal";
import { useState } from "react";

export const HomeWorkDetail = () => {
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
                <Container>
                    <TitleWrapper>
                        <p>수학 포스터 만들어서 제출하기</p>
                        <img src={Setting} alt="설정" onClick={handleIconClick} style={{ cursor: "pointer" }} />
                    </TitleWrapper>
                    <Date>9월 20일 ~ 9월 30일</Date>
                    <Line />
                    <ContentWrapper>
                        <LeftContainer>
                            <TextWrapper>
                                <Text>과제 설명</Text>
                                <ExplainText>
                                    한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서
                                    만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로
                                    11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와
                                    얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~
                                </ExplainText>
                                <Text>제출 양식</Text>
                                <ExplainText>한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~</ExplainText>
                                <Line2 />
                                <FileWrapper>
                                    <Text>파일 양식</Text>
                                    <File>
                                        <img src={DownLoad} alt="저장" />
                                        <p>수학 파일.hwp</p>
                                    </File>
                                </FileWrapper>
                            </TextWrapper>
                            <CompleteHomeWork />
                        </LeftContainer>
                        <RightContainer>
                            <InCompleteHomeWork />
                            <QandA />
                        </RightContainer>
                    </ContentWrapper>
                </Container>
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

const Container = styled.div`
    margin-top: 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 79px;
    gap: 629px;
    > p {
        font-size: 32px;
        font-weight: 600;
    }
`;

const Date = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 24px;
    align-self: flex-start;
    display: flex;
`;

const ContentWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    gap: 40px;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 720px;
    align-self: flex-start;
`;

const TextWrapper = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
`;

const ExplainText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #b8b8b8;
`;

const Line2 = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: #414142;
`;

const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const File = styled.div`
    width: calc(100% - 24px);
    height: 28px;
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: #414142;
    border-radius: 8px;
    gap: 16px;
    > img {
        background-color: #414142;
        cursor: pointer;
    }
    > p {
        font-size: 16px;
        font-weight: 400;
        color: #b8b8b8;
        background-color: #414142;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    gap: 38px;
`;
