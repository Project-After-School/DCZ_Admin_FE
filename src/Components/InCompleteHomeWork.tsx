import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

export const InCompleteHomeWork = () => {
    let data = [
        {
            label: "",
            value: 30,
            color: "#80EAFF",
            cutout: "50%",
        },
        {
            label: "",
            value: 100 - 30,
            color: "#414142",
            cutout: "50%",
        },
    ];
    const CompleteData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true),
            },
        ],
    };

    return (
        <Wrapper>
            <TextWrapper>
                <p style={{ fontWeight: "600", fontSize: "20px" }}>제출 안 한 학생</p>
                <StudentWrapper>
                    <p>1번 강해민</p>
                    <p>1번 강해민</p>
                    <p>1번 강해민</p>
                    <p>1번 강해민</p>
                    <p>1번 강해민</p>
                    <p>1번 강해민</p>
                    <p>1번 강해민</p>
                </StudentWrapper>
            </TextWrapper>
            <GraphWrapper>
                <Title>과제 제출</Title>
                <SubTitleWrapper>
                    <span>10</span>
                    <span style={{ color: "#B8B8B8" }}>/16</span>
                </SubTitleWrapper>
                <Doughnut
                    data={CompleteData}
                    options={{ cutout: 90, maintainAspectRatio: false, responsive: false }}
                    width={280}
                    height={280}
                />
            </GraphWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 280px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const StudentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    align-items: center;
    > p {
        font-weight: 500;
        font-size: 14px;
        color: #d4d4d4;
    }
`;

const GraphWrapper = styled.div`
    display: flex;
    width: 280px;
    height: 280px;
    align-items: center;
    justify-content: center;
    position: relative;
    > span {
        position: absolute;
    }
`;

const Title = styled.span`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 500;
    color: #858586;
`;

const SubTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 53%;
    font-size: 20px;
    font-weight: 500;
`;

const SubTitle = styled.span``;
