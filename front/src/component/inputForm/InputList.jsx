import Input from "./Input";

const InputList = ({inputValues}) => {
    return(
        <>
        {inputValues.map((value, index) => (
          <Input key={index} inputValue={value} />
        ))}
      </>
    )
}

export default InputList;