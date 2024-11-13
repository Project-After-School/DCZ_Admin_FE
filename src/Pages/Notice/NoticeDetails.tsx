import styled from "styled-components";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Common/Header";
import Setting from "../../Assets/Setting.svg";
import { QandA } from "../../Components/HomeWork/QandA";
import { Line } from "../ClassRoom/ClassList";
import { EditModal } from "../../Components/Modal/EditModal";
import { getNoticeDetail } from "../../Apis/notice/notice";
import { getNoticeDetailResponse } from "../../Apis/notice/type";
import { useParams } from "react-router-dom";

export const NoticeDetails = () => {
    const { notificationId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noticeDetail, setNoticeDetail] = useState<getNoticeDetailResponse | null>(null);

    useEffect(() => {
        if (notificationId) {
            getNoticeDetail(Number(notificationId))
                .then((response) => {
                    setNoticeDetail(response.data);
                })
                .catch((error) => {
                    console.error("공지 상세보기 오류:", error);
                });
        }
    }, [notificationId]);

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
                            <p>{noticeDetail?.title}</p>
                            <img src={Setting} alt="설정" onClick={handleIconClick} style={{ cursor: "pointer" }} />
                        </TitleWrapper>
                        <SubTitleWrapper>
                            <Teacher>{noticeDetail?.author_name} 선생님</Teacher>
                            <Date>{noticeDetail?.date}9월 4일</Date>
                        </SubTitleWrapper>
                        <Line />
                        <Content>{noticeDetail?.content}</Content>
                    </ContentContainer>
                    <QandAContainer>
                        <QandA />
                    </QandAContainer>
                </MainContainer>
            </Wrapper>
            {isModalOpen && notificationId && (
                <EditModal notificationId={notificationId as string} closeModal={closeModal} />
            )}
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubTitleWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

const Teacher = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #d4d4d4;
`;

const MainContainer = styled.div`
    display: flex;
    margin-top: 150px;
    width: 1024px;
    max-width: 1040px;

    @media (max-width: 1200px) {
        width: 800px;
    }
`;

const ContentContainer = styled.div`
    width: 1000px;
    margin-right: 20px;
    @media (max-width: 768px) {
        margin-right: 10px;
    }
`;

const QandAContainer = styled.div`
    flex: 1;
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
    margin-top: 40px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
