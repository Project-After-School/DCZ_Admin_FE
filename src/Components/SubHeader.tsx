import styled from "styled-components";
import { useState } from "react";

interface SubHeaderProps {
    active?: boolean;
}

export const SubHeader = () => {
    const [activeButton, setActiveButton] = useState("과제");

    return (
        <Wrapper>
            <ButtonWrapper>
                <Slider activeButton={activeButton} />
                <Button active={activeButton === "과제"} onClick={() => setActiveButton("과제")}>
                    과제
                </Button>
                <Button active={activeButton === "공지사항"} onClick={() => setActiveButton("공지사항")}>
                    공지사항
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 416px;
    height: 45px;
`;

const ButtonWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
`;

const Button = styled.button<SubHeaderProps>`
    background-color: ${(props) => (props.active ? "#00d4ff" : "transparent")};
    width: 50%;
    height: 100%;
    border-radius: 52px;
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => (props.active ? "black" : "white")};
    border: none;
    cursor: pointer;
    z-index: 100;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
`;

const Slider = styled.div<{ activeButton: string }>`
    position: absolute;
    top: 0;
    left: ${({ activeButton }) => (activeButton === "과제" ? "0" : "50%")};
    width: 50%;
    height: 100%;
    background-color: #00d4ff;
    border-radius: 52px;
    transition: left 0.3s ease-in-out;
    z-index: 0;
`;
