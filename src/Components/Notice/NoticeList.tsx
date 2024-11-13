import styled from "styled-components";
import { noticeList } from "../../Apis/notice/type";
import { useNavigate } from "react-router-dom";
import { useTimeStamp } from "../../Hooks/useTimeStamp";

interface TextProps {
    main?: boolean;
    read?: boolean;
}

interface NoticeListProps {
    notice: noticeList;
}

export const NoticeList = ({ notice }: NoticeListProps) => {
    const navigate = useNavigate();
    const isAllRead = true;

    const handleClick = () => {
        navigate(`/notice/${notice.id}`);
    };

    const timeAgo = useTimeStamp(notice.date);

    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    <Title onClick={handleClick}>{notice.title}</Title>
                    <Days>{timeAgo}</Days>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 132px;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Title = styled.p`
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
`;

const Days = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #b8b8b8;
`;
