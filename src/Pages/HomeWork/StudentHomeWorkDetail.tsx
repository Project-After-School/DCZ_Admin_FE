import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { FeedBack } from "../../Components/HomeWork/FeedBack";
import DownLoad from "../../Assets/DownLoad.svg";

export const StudentHomeWorkDetail = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <StudentInfo>1번 강해민</StudentInfo>
                <Line />
                <SubTitle>과제 파일 미리보기</SubTitle>
                <ContentWrapper>
                    <FilePreview />
                    <RightWrapper>
                        <FeedBack />
                        <FileWrapper>
                            <p>과제 파일 원본</p>
                            <FileBox>
                                <Text>파일 양식</Text>
                                <File>
                                    <img src={DownLoad} alt="저장" />
                                    <p>수학 파일.hwp</p>
                                </File>
                            </FileBox>
                        </FileWrapper>
                    </RightWrapper>
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
    margin-top: 90px;
    width: 1040px;
    @media (max-width: 1200px) {
        width: 800px;
    }
`;

const StudentInfo = styled.p`
    font-weight: 600;
    font-size: 32px;
    margin-top: 79px;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #414142;
    margin-top: 40px;
`;

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 28px;
    margin-bottom: 28px;
`;

const ContentWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 100px;
`;

const FilePreview = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1.414;
    background-color: white;
    border-radius: 12px;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 280px;
`;

const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    > p {
        font-weight: 600;
        font-size: 20px;
    }
`;

const FileBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
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
