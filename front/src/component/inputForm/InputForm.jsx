import InputList from './InputList'
import FormButton from './FormButton';

const InputForm = ({ inputValues, buttonValue }) => {
    return(
        <>
            <InputList inputValues={inputValues}/>
            <FormButton buttonValue={buttonValue}/>
        </>
    );
}

export default InputForm;