import styled from "styled-components";
import { useState } from "react";

interface EditModalProps {
    closeModal: (e: any) => void;
}

export const EditModal = ({ closeModal }: EditModalProps) => {
    const [isModalOpen] = useState(true);

    return (
        <>
            {isModalOpen && (
                <Wrapper onClick={closeModal}>
                    <Container onClick={(e) => e.stopPropagation()}>
                        <EditText>수정하기</EditText>
                        <Line />
                        <DeleteText>삭제하기</DeleteText>
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
    width: 480px;
    height: 202px;
    background-color: #242424;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    align-items: center;
    cursor: pointer;
`;

const EditText = styled.p`
    font-weight: 600;
    font-size: 24px;
`;

const Line = styled.div`
    width: 400px;
    height: 1px;
    background-color: #5d5d5e;
`;

const DeleteText = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #fe5741;
`;
