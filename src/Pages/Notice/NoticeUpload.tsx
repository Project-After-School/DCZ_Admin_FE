import styled from "styled-components";
import { Header } from "../../Components/Common/Header";
import { Text, ClassName } from "../HomeWork/HomeWorkList";
import { Input } from "../../Components/Common/Input";
import { TextArea } from "../../Components/Common/TextArea";
import { Button } from "../../Components/Common/Button";
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
`;
