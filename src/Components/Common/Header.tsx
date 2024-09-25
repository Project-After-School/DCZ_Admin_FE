import styled from "styled-components";
import Logo from "../../Assets/Logo.svg";
import Logout from "../../Assets/Logout.svg";
import { LogoutModal } from "../Modal/LogoutModal";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIconClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <Link to={"/"}>
                        <LogoImg src={Logo} alt="로고" />
                    </Link>
                    <TextWrapper>
                        <div>
                            <Text style={{ color: "#B3F2FF" }}>수학</Text>
                            <Text>강해민 선생님</Text>
                        </div>
                        <img src={Logout} alt="로그아웃" onClick={handleIconClick} />
                    </TextWrapper>
                </Container>
            </Wrapper>
            {isModalOpen && <LogoutModal closeModal={closeModal} />}
        </>
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
    z-index: 1000;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1040px;
    justify-content: space-between;

    @media (max-width: 1200px) {
        width: 800px;
    }
`;

const LogoImg = styled.img`
    margin-top: 22px;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 39px;
    margin-left: auto;
    gap: 23px;
    > div {
        gap: 10px;
        display: flex;
    }
    > img {
        cursor: pointer;
    }
`;

const Text = styled.div`
    font-weight: 600;
    font-size: 24px;
`;
