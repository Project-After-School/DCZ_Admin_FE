import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styled from "styled-components";
import { Value } from "react-calendar/dist/cjs/shared/types";

moment.locale("ko");

export const ChooseDate = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isSelectingStartDate, setIsSelectingStartDate] = useState<boolean>(false);
    const [isSelectingEndDate, setIsSelectingEndDate] = useState<boolean>(false);
    const calendarRef = useRef<HTMLDivElement | null>(null);

    const handleDateChange = (value: Value, isStartDate: boolean) => {
        if (value instanceof Date) {
            if (isStartDate) {
                setStartDate(value);
            } else {
                setEndDate(value);
            }
        }
    };

    const toggleStartDatePicker = () => {
        setIsSelectingStartDate((prev) => !prev);
        if (isSelectingEndDate) setIsSelectingEndDate(false);
    };

    const toggleEndDatePicker = () => {
        setIsSelectingEndDate((prev) => !prev);
        if (isSelectingStartDate) setIsSelectingStartDate(false);
    };

    const formatDate = (date: Date | null, defaultText: string) => {
        return date ? moment(date).format("M월 D일") : defaultText;
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
            setIsSelectingStartDate(false);
            setIsSelectingEndDate(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Wrapper>
            <DateBox
                onClick={toggleStartDatePicker}
                active={isSelectingStartDate}
                selected={!!startDate} // startDate가 있으면 true
            >
                {formatDate(startDate, "과제 제출 시작")}
            </DateBox>
            <p>-</p>
            <DateBox
                onClick={toggleEndDatePicker}
                active={isSelectingEndDate}
                selected={!!endDate} // endDate가 있으면 true
            >
                {formatDate(endDate, "과제 제출 마감")}
            </DateBox>

            {isSelectingStartDate && (
                <CalendarWrapper ref={calendarRef}>
                    <Calendar
                        locale="ko"
                        onChange={(value) => handleDateChange(value, true)}
                        value={startDate}
                        formatDay={(locale, date) => moment(date).format("D")}
                        formatMonthYear={(locale, date) => moment(date).format("M월")}
                        next2Label={null}
                        prev2Label={null}
                    />
                </CalendarWrapper>
            )}

            {isSelectingEndDate && (
                <CalendarWrapper ref={calendarRef} style={{ left: "639px" }}>
                    <Calendar
                        locale="ko"
                        onChange={(value) => handleDateChange(value, false)}
                        value={endDate}
                        formatDay={(locale, date) => moment(date).format("D")}
                        formatMonthYear={(locale, date) => moment(date).format("M월")}
                        next2Label={null}
                        prev2Label={null}
                    />
                </CalendarWrapper>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    > p {
        font-weight: 600;
        font-size: 24px;
    }
`;

const DateBox = styled.div<{ active: boolean; selected: boolean }>`
    width: 140px;
    height: 56px;
    background-color: #414142;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    color: ${(props) => (props.selected ? "white" : "#686869")};
    border: 2px solid ${(props) => (props.active ? "#00D4FF" : "transparent")};
    transition: border 0.2s ease-in-out;
`;

const CalendarWrapper = styled.div`
    position: absolute;
    top: 441px;
    z-index: 100;

    .react-calendar {
        border-radius: 12px;
        border: 1px solid #414142;
        background-color: #242424;
        padding: 12px 24px;
        display: flex;
        width: 384px;
        flex-direction: column;
        gap: 8px;
    }

    .react-calendar__navigation {
        margin: 0;
    }

    .react-calendar__month-view {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .react-calendar__navigation__label {
        font-weight: 500;
        font-size: 20px;
    }

    .react-calendar__navigation button {
        &:hover {
            background-color: #242424;
        }
        &:focus {
            background-color: #242424;
        }
    }

    .react-calendar__month-view__weekdays {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        abbr {
            font-size: 18px;
            font-weight: 600;
        }
    }

    .react-calendar__month-view__days__day {
        abbr {
            background-color: #242424;
            &:hover {
                background-color: #414142;
            }
        }
    }

    .react-calendar__month-view__days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        row-gap: 8px;
        column-gap: 0px;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
        abbr {
            color: #535354;
        }
    }

    .react-calendar__tile {
        text-align: center;
        height: 48px;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 200;
        background-color: transparent;
        border-radius: 12px;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background: #414142;
        border-radius: 12px;

        &:abbr {
            background-color: #414142;
        }
    }
    .react-calendar__tile--active abbr {
        background-color: #414142;
    }
    .react-calendar__tile--active {
        background-color: #414142;
    }

    .react-calendar__month-view__days__day:hover abbr,
    .react-calendar__month-view__days__day:focus abbr {
        background-color: #414142;
    }
`;
