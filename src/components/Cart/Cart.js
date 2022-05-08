import ModalOverlay from "../UI/ModalOverlay";
import CartItem from "./CartItem";

const ORDERED_ITEMS = [
  {
    id: "m6",
    name: "Oyakodon",
    amount: 2,
    price: 12.99,
  },
  {
    id: "m7",
    name: "Takoyaki",
    amount: 1,
    price: 5.69,
  },
  {
    id: "m6",
    name: "Ramen",
    amount: 2,
    price: 10.99,
  },
  {
    id: "m6",
    name: "Ice Water",
    amount: 2,
    price: 1.99,
  },
];

const Cart = (props) => {
  const arrOfPricePerItem = ORDERED_ITEMS.map(
    (item) => item.amount * item.price
  );
  const totalAmount = arrOfPricePerItem.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return (
    <ModalOverlay onCloseCart={props.onCloseCart}>
      <div className="p-8 pb-0">
        <h2 className="text-4xl font-inter font-bold mb-1">Your Cart</h2>
        <p className="mb-5">
          please double check your meal and the amount you ordered
        </p>
        <div className="h-[1px] w-full mx-auto bg-black mb-6"></div>
        <div className="w-full border-b-[1px] border-black py-6">
          {ORDERED_ITEMS.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              pricePerItem={+item.amount * +item.price}
            />
          ))}
        </div>
        <div className="w-full border-b-[1px] border-black text-2xl font-bold flex flex-row justify-between py-4">
          <h2>Total Price: </h2>
          <h2>{`$${totalAmount.toFixed(2)}`}</h2>
        </div>
        <div className="w-full h-[100px] flex flex-row justify-end items-center py-6">
          <button
            className="button border-2 border-b-8 border-black hover:bg-red-600 hover:text-white hover:border-2 hover:translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-linear"
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className="button border-2 border-b-8 border-black hover:bg-green-600 hover:text-white hover:border-2 hover:translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-linear">
            Order
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Cart;
