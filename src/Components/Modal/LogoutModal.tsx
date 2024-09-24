import styled from "styled-components";
import { useState } from "react";

interface LogoutModalProps {
    closeModal: (e: any) => void;
}

export const LogoutModal = ({ closeModal }: LogoutModalProps) => {
    const [isModalOpen] = useState(true);

    return (
        <>
            {isModalOpen && (
                <Wrapper onClick={closeModal}>
                    <Container onClick={(e) => e.stopPropagation()}>
                        <TextWrapper>
                            <Title>로그아웃 하시겠습니까?</Title>
                            <ExplainText>다음 접속 시 로그인을 해야합니다.</ExplainText>
                        </TextWrapper>
                        <ButtonWrapper>
                            <CancleButton>취소</CancleButton>
                            <SubmitButton>확인</SubmitButton>
                        </ButtonWrapper>
                    </Container>
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
`;

const Container = styled.div`
    width: 565px;
    height: 275px;
    border: 1px solid #535354;
    background-color: #242424;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 44px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 50px;
`;

const Title = styled.p`
    font-weight: 600;
    font-size: 32px;
`;

const ExplainText = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: #b8b8b8;
`;

const ButtonWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    margin-top: auto;
    cursor: pointer;
`;

const CancleButton = styled.p`
    font-weight: 600;
    font-size: 18px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SubmitButton = styled.p`
    font-weight: 600;
    font-size: 18px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fe5741;
`;
