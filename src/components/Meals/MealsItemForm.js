import { useState } from "react";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const [inputNumVal, setInputNumVal] = useState(0);

  const lowerTheNumHandler = () => {
    setInputNumVal((prev) => {
      return prev - 1;
    });
  };
  const RiseTheNumHandler = () => {
    setInputNumVal((prev) => {
      return prev + 1;
    });
  };
  const changeNumValHandler = (enteredVal) => {
    setInputNumVal(parseInt(enteredVal));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <Input
        onChange={changeNumValHandler}
        label="Amount"
        value={inputNumVal}
        input={{
          id: props.name + Math.random() * 10,
          type: "number",
          min: 0,
          max: 100,
          step: 1,
        }}
        onLower={lowerTheNumHandler}
        onRise={RiseTheNumHandler}
      />
      <button className="w-[80%] mx-auto mt-4 py-2 px-4 text-black bg-white rounded-full cursor-pointer border-2 border-b-8 hover:border-2 hover:translate-y-1 border-black transition-all duration-150 ease-in">
        + Add
      </button>
    </form>
  );
};

export default MealsItemForm;
