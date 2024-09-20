import styled from "styled-components";
import Logo from "../Assets/Logo(only Text).svg";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";

export const Login = () => {
    return (
        <Wrapper>
            <img src={Logo} alt="로고" />
            <ContentWrapper>
                <p>로그인 하기</p>
                <Input label="아이디" placeholder="아이디 입력" />
                <Input isPassword={true} type="password" label="비밀번호" placeholder="비밀번호 입력" />
            </ContentWrapper>
            <ButtonWrapper>
                <Button to="/" content="로그인하기" disabled={true} size="small" />
            </ButtonWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 600px;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    > p {
        font-weight: 600;
        font-size: 32px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 80px;
    margin-left: auto;
`;
