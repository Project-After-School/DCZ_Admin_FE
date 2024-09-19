import styled from "styled-components";
import Logo from "../Assets/Logo.svg";

export const Header = () => {
    return (
        <Wrapper>
            <Container>
                <LogoImg src={Logo} alt="로고" />
                <TextWrapper>
                    <Text style={{ color: "#B3F2FF" }}>수학</Text>
                    <Text>강해민 선생님</Text>
                </TextWrapper>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 556px;
`;

const LogoImg = styled.img`
    margin-top: 22px;
`;

const TextWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const Text = styled.div`
    font-weight: 600;
    font-size: 24px;
    margin-top: 39px;
`;
