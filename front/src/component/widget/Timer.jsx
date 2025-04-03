import { useEffect, useState } from "react";
import styled from "styled-components";

const Timer = ({ milliseconds, onEnd }) => {
    const [timeLeft, setTimeLeft] = useState(milliseconds);

    useEffect(() => {
        if (!milliseconds) return; // milliseconds 값이 없으면 실행 X
        setTimeLeft(milliseconds);

        const timerInterval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1000) {
                    clearInterval(timerInterval);
                    onEnd && onEnd(); // 시간이 끝나면 onEnd 실행
                    return 0;
                }
                return prev - 1000;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [milliseconds, onEnd]);

    // ⏳ `mm:ss` 형식으로 변환하는 함수
    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000); // 1분 = 60000ms
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return <StyledTimer>{formatTime(timeLeft)}</StyledTimer>;
};

const StyledTimer = styled.span`
    font-size: 14px;
    color: red;
    font-weight: bold;
    margin-left: auto;
    width: 40px;
`;

export default Timer;
