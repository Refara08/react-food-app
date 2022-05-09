import { useContext } from "react";
import { useState } from "react";

import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [inputNumVal, setInputNumVal] = useState(props.amount);

  const lowerTheNumHandler = () => {
    setInputNumVal((prev) => {
      return prev - 1;
    });
    cartCtx.removeItem(props.id);
  };
  const RiseTheNumHandler = () => {
    setInputNumVal((prev) => {
      return prev + 1;
    });
    cartCtx.addItem({ ...props.item, amount: 1 });
  };
  const changeNumValHandler = (enteredVal) => {
    setInputNumVal(parseInt(enteredVal));
  };

  return (
    <div className="grid grid-cols-4 mb-3">
      <h2 className="font-bold text-xl">{props.name}</h2>
      <p>{`$${props.price.toFixed(2)}`}</p>
      <div className="justify-self-end">
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
      </div>
      <p className="justify-self-end">{`$${props.pricePerItem.toFixed(2)}`}</p>
    </div>
  );
};

export default CartItem;
