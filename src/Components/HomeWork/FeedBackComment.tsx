import styled from "styled-components";

export const FeedBackComment = () => {
    return (
        <Wrapper>
            <p>너가 제대로 안 해서 ㄱ래 책 보면서 다시 잘해 봐.</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 200px;
    background-color: #535354;
    padding: 12px;
    border-radius: 12px;
    margin-left: auto;
    > p {
        background-color: #535354;
        font-size: 12px;
        font-weight: 400;
    }
`;
