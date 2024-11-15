import { Link } from "react-router-dom";
import styled from "styled-components";

export const CompleteHomeWork = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <p>제출된 과제</p>
                <NumberWrapper>
                    <CompleteNumber>12</CompleteNumber>
                    <StudentsNumber>/16</StudentsNumber>
                </NumberWrapper>
            </TextWrapper>
            <HomeWorkWrapper>
                <Link to={"/homework/detail/studentId"}>
                    <HomeWorkBox>
                        <ProfilePicture />
                        <Text>1번</Text>
                        <Text>강해민</Text>
                    </HomeWorkBox>
                </Link>
                <Link to={"/homework/detail/studentId"}>
                    <HomeWorkBox>
                        <ProfilePicture />
                        <Text>1번</Text>
                        <Text>강해민</Text>
                    </HomeWorkBox>
                </Link>
                <Link to={"/homework/detail/studentId"}>
                    <HomeWorkBox>
                        <ProfilePicture />
                        <Text>1번</Text>
                        <Text>강해민</Text>
                    </HomeWorkBox>
                </Link>
                <Link to={"/homework/detail/studentId"}>
                    <HomeWorkBox>
                        <ProfilePicture />
                        <Text>1번</Text>
                        <Text>강해민</Text>
                    </HomeWorkBox>
                </Link>
            </HomeWorkWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 68px;
    gap: 28px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    > p {
        font-weight: 600;
        font-size: 32px;
    }
`;

const NumberWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const CompleteNumber = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #80eaff;
`;

const StudentsNumber = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #b8b8b8;
`;

const HomeWorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const HomeWorkBox = styled.div`
    width: calc(100% - 24px);
    height: 28px;
    padding: 16px 12px;
    background-color: #414142;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 16px;
`;

const ProfilePicture = styled.div`
    width: 28px;
    height: 28px;
    background-color: black;
    border-radius: 100%;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
    background-color: #414142;
`;
