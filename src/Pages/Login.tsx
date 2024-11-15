import styled from "styled-components";
import Logo from "../Assets/Logo(only Text).svg";
import { Input } from "../Components/Common/Input";
import { Button } from "../Components/Common/Button";
import { useState, useEffect } from "react";
import { adminLogin } from "../Apis/admin/admin";
import { Cookie } from "../Utils/Cookie";

export const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (id && password) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [id, password]);

    const handleLogin = () => {
        adminLogin({
            username: id,
            password: password,
        })
            .then((response) => {
                Cookie.set("access_token", response.data.access_token);
            })
            .catch(() => {
                setPassword("");
            });
    };

    return (
        <Wrapper>
            <img src={Logo} alt="로고" />
            <ContentWrapper>
                <p>로그인 하기</p>
                <Input label="아이디" placeholder="아이디 입력" value={id} onChange={(e) => setId(e.target.value)} />
                <Input
                    isPassword={true}
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </ContentWrapper>
            <ButtonWrapper>
                <Button to="/" content="로그인하기" disabled={isDisabled} size="small" onClick={handleLogin} />
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
