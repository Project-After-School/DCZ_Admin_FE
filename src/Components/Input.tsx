import styled from "styled-components";
import React, { useState } from "react";
import cloasEye from "../Assets/closeEye.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    isPassword?: boolean;
    label?: string;
}

export const Input: React.FC<InputProps> = ({
    type,
    label,
    placeholder,
    value,
    onChange,
    isPassword = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputText
                type={isPassword && !showPassword ? "password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            {isPassword && <EyeIcon src={showPassword ? cloasEye : cloasEye} onClick={handleTogglePassword} />}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    gap: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Label = styled.p`
    font-size: 18px;
    font-weight: 500;
`;

const InputText = styled.input`
    width: calc(100% - 20px);
    background-color: #414142;
    height: 56px;
    padding-left: 20px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 400;
`;

const EyeIcon = styled.img`
    background-color: #414142;
    position: absolute;
    right: 10px;
    top: 55%;
    transform: translate(-50%);
    cursor: pointer;
`;
