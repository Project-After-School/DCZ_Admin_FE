import styled from "styled-components";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    width?: string;
    height?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ width, height, label, placeholder, value, onChange, ...props }) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <TextAreaText
                width={width}
                height={height}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    gap: 12px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.p`
    font-size: 18px;
    font-weight: 500;
`;

const TextAreaText = styled.textarea<{ height?: string; width?: string }>`
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    background-color: #414142;
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 400;
    color: white;
    border: none;
    resize: none;
    outline: none;
`;
