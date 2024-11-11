import styled from "styled-components";

interface TextProps {
  main?: boolean;
  read?: boolean;
}

export const NoticeList = () => {
  const isAllRead = true;

  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Text main>수학 수행평가 안내</Text>
          <Text color="#707071">1일전</Text>
        </TextWrapper>
      </ContentWrapper>
      <RightContentWrapper>
        <Text read={isAllRead}>1명읽음</Text>
      </RightContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 48px);
  max-width: 1040px;
  height: 132px;
  margin: 0 auto;
  padding: 10px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const RightContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Text = styled.div<TextProps & { color?: string }>`
  font-size: ${(props) => (props.main ? "24px" : "20px")};
  font-weight: ${(props) => (props.main ? "600" : "500")};
  color: ${(props) => props.color || (props.read ? "#707071" : "#00D4FF")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.main ? "20px" : "18px")};
  }
`;
