import styled from "styled-components";
import { Header } from "../Components/Header";
import { Text, ClassName } from "./HomeWorkList";
import { TextArea } from "../Components/TextArea";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { ChooseDate } from "../Components/ChooseDate";

export const CreateHomeWork = () => {
    return (
        <Wrapper>
            <Header />
            <TitleWrapper>
                <Text>새로운 과제</Text>
                <ClassName>2학년 2반</ClassName>
            </TitleWrapper>
            <Line />
            <ContentWrapper>
                <DateWrapper>
                    <p>과제 기간</p>
                    <ChooseDateWrapper>
                        <ChooseDate />
                    </ChooseDateWrapper>
                </DateWrapper>
                <Input label="제목" placeholder="제목을 입력해주세요." />
                <TextArea label="과제 내용" height="156px" placeholder="과제 내용을 입력해주세요." />
                <TextArea label="제출 양식" height="88px" placeholder="제출 양식을 입력해주세요." />
                <FileWrapper>
                    <p>파일 양식</p>
                    <FileAddButton>파일 추가</FileAddButton>
                </FileWrapper>
                <ButtonWrapper>
                    <div>
                        <Button disabled={true} content="과제 업로드" />
                    </div>
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Line = styled.div`
    margin-top: 40px;
    width: 1040px;
    height: 1px;
    background-color: #414142;
    margin-bottom: 60px;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 723px;
    margin-top: 171px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    width: 1040px;
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
    width: calc(100% - 48px);
    height: 100%;
    align-items: center;
    border: 1px solid #414142;
    border-radius: 16px;
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

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    > div {
        margin-left: auto;
    }
`;
