import styled from "styled-components";
import Timer from '../widget/Timer'

const Input = ({ inputValue }) => {

    return (
        <Container>
            <Label>{inputValue.essential && <span style={{color:'#B11111'}}>*</span>} {inputValue.label}</Label>
            <StyledContainer>
            <InputStyle
                type={inputValue.type}
                placeholder={inputValue.placeholder}
                value={inputValue.value}
                onChange={(e) => inputValue.setValue(e.target.value)}
                color={inputValue.color}
                disabled ={inputValue.disabled}
            />
            {inputValue.timer>0 && <Timer milliseconds={inputValue.timer} />}
            </StyledContainer>
        </Container>
    )
}

const InputStyle = styled.input`
padding: 12px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 5px;
outline: none;
width: 100%;
 &::placeholder {
        color: ${({ color }) => color && color};
    }
&:focus {
    border-color: #023691;
    box-shadow: 0 0 5px rgba(2, 54, 145, 0.2);
}
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


`;

const Label = styled.label`
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #444;
`;



const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    gap: 10px; /* 요소 사이 여백 */
`;

export default Input;