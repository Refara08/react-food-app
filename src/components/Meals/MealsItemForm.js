import { useState, useRef } from "react";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const [inputNumVal, setInputNumVal] = useState(1);
  const [enteredAmountValid, setEnteredAmountValid] = useState(true);
  const [alerMsg, setAlertMsg] = useState("");

  const amountInputRef = useRef();

  //edit value
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

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setEnteredAmountValid(false);
      setAlertMsg("please double check your order amount");
      return;
    } else if (enteredAmountNumber > 20) {
      setEnteredAmountValid(false);
      setAlertMsg("sorry, we didn't receive more than 20 orders/item");
      return;
    }

    setEnteredAmountValid(true);
    props.onGetAmountItem(enteredAmountNumber);
  };

  return (
    <form className="flex flex-col h-full relative" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        onChange={changeNumValHandler}
        label="Amount"
        value={inputNumVal}
        input={{
          id: props.name + Math.random() * 10,
          type: "number",
          min: 0,
          max: 20,
          step: 1,
        }}
        onLower={lowerTheNumHandler}
        onRise={RiseTheNumHandler}
      />
      <div className="grid place-items-center">
        <button className="w-[80%] mx-auto mt-4 mb-6 py-2 px-4 text-black bg-white rounded-full cursor-pointer border-2 border-b-8 hover:border-2 hover:translate-y-1 border-black transition-all duration-150 ease-in">
          + Add
        </button>
      </div>
      <span
        className={`absolute w-full bottom-0 left-1/2 -translate-x-1/2 text-xs p-1 bg-red-600 text-white mt-1 rounded-tl-full rounded-tr-full text-center transition-all duration-300 ease-in ${
          !enteredAmountValid
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1"
        }`}
      >
        {alerMsg}
      </span>
    </form>
  );
};

export default MealsItemForm;
