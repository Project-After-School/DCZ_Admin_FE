import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
    to?: string;
    size?: "small" | "normal";
    disabled?: boolean;
    onClick?: () => void;
    content?: string;
}

export const Button: React.FC<ButtonProps> = ({ to, size = "normal", disabled, onClick, content }) => {
    const getSize = (size: "small" | "normal") => {
        switch (size) {
            case "small":
                return { width: "318px" };
            case "normal":
                return { width: "323px" };
        }
    };

    const { width } = getSize(size);

    if (to) {
        return (
            <StyledLink
                to={disabled ? "#" : to}
                disabled={disabled}
                onClick={disabled ? undefined : onClick}
                width={width}
            >
                {content}
            </StyledLink>
        );
    }

    return (
        <Wrapper disabled={disabled} onClick={onClick} width={width}>
            {content}
        </Wrapper>
    );
};

const Wrapper = styled.button<{ width: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00d4ff;
    width: ${({ width }) => width};
    height: 61px;
    font-size: 18px;
    font-weight: 600;
    color: black;
    border-radius: 12px;
    cursor: pointer;
    &:disabled {
        background-color: #b3f2ff;
        pointer-events: none;
    }
`;

const StyledLink = styled(Link)<{ width: string; disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00d4ff;
    width: ${({ width }) => width};
    height: 61px;
    font-size: 18px;
    font-weight: 600;
    color: black;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    ${({ disabled }) =>
        disabled &&
        `
        background-color: #b3f2ff;
        pointer-events: none;
    `}
`;
