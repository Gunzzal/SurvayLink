import styled from "styled-components";

const FormButton = ({buttonValue}) => {

    return(
        <Button onClick={buttonValue?.event}> {buttonValue?.value}</Button>
    )
}

const Button = styled.button`
    background-color: #023691;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    &:hover {
        background-color: #012a67;
    }
`;
export default FormButton;