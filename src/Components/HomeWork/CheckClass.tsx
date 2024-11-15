import styled from "styled-components";
import Check from "../../Assets/Check.svg";
import React, { useState } from "react";

interface CheckClassProps {
    onChangeGrade: (grades: string[]) => void;
    onChangeClassNum: (classNums: string[]) => void;
    initialGrade?: string[];
    initialClassNum?: string[];
}

export const CheckClass: React.FC<CheckClassProps> = ({
    onChangeClassNum,
    onChangeGrade,
    initialClassNum = [],
    initialGrade = [],
}) => {
    const [selectedClass, setSelectedClass] = useState<{ grade: string; classNum: string }[]>([]);

    const handleClassChange = (grade: string, classNum: string) => {
        const isSelected = selectedClass.some((selected) => selected.grade === grade && selected.classNum === classNum);

        let updatedClasses;
        if (isSelected) {
            updatedClasses = selectedClass.filter(
                (selected) => !(selected.grade === grade && selected.classNum === classNum)
            );
        } else {
            updatedClasses = [...selectedClass, { grade, classNum }];
        }

        setSelectedClass(updatedClasses);

        onChangeGrade(updatedClasses.map((item) => item.grade));
        onChangeClassNum(updatedClasses.map((item) => item.classNum));
    };

    return (
        <Wrapper>
            <p>대상 반 선택</p>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "1" && selected.classNum === "1")}
                    onChange={() => handleClassChange("1", "1")}
                />
                <p>1학년 1반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "1" && selected.classNum === "2")}
                    onChange={() => handleClassChange("1", "2")}
                />
                <p>1학년 2반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "1" && selected.classNum === "3")}
                    onChange={() => handleClassChange("1", "3")}
                />
                <p>1학년 3반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "1" && selected.classNum === "4")}
                    onChange={() => handleClassChange("1", "4")}
                />
                <p>1학년 4반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "2" && selected.classNum === "1")}
                    onChange={() => handleClassChange("2", "1")}
                />
                <p>2학년 1반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "2" && selected.classNum === "2")}
                    onChange={() => handleClassChange("2", "2")}
                />
                <p>2학년 2반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "2" && selected.classNum === "3")}
                    onChange={() => handleClassChange("2", "3")}
                />
                <p>2학년 3반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "2" && selected.classNum === "4")}
                    onChange={() => handleClassChange("2", "4")}
                />
                <p>2학년 4반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "3" && selected.classNum === "1")}
                    onChange={() => handleClassChange("3", "1")}
                />
                <p>3학년 1반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "3" && selected.classNum === "2")}
                    onChange={() => handleClassChange("3", "2")}
                />
                <p>3학년 2반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "3" && selected.classNum === "3")}
                    onChange={() => handleClassChange("3", "3")}
                />
                <p>3학년 3반</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBox
                    type="checkbox"
                    checked={selectedClass.some((selected) => selected.grade === "3" && selected.classNum === "4")}
                    onChange={() => handleClassChange("3", "4")}
                />
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
