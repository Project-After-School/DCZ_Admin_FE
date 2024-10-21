import styled from "styled-components";
import Check from "../../Assets/Check.svg";

export const CheckClass = () => {
    return (
        <Wrapper>
            <p>대상 반 선택</p>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>1학년 1반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>1학년 2반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>1학년 3반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>1학년 4반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>2학년 1반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>2학년 2반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>2학년 3반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>2학년 4반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>3학년 1반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>3학년 2반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>3학년 3반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox type="checkbox" />
                <p>3학년 4반</p>
            </CheckBoxWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: calc(100% - 48px);
    padding: 24px;
    border: 1px solid #414142;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    > p {
        font-weight: 600;
        font-size: 20px;
    }
`;

const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const CheckBox = styled.input`
    appearance: none;
    width: 28px;
    height: 28px;
    cursor: pointer;
    border: 1px solid #686869;
    background-color: #414142;
    border-radius: 4px;

    &:checked {
        background-image: url(${Check});
        background-position: 50%;
        background-repeat: no-repeat;
    }

    > p {
        font-weight: 600;
        font-size: 18px;
    }
`;
