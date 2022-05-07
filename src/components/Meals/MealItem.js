import Card from "../UI/Card";
import MealsItemForm from "./MealsItemForm";

const MealItem = (props) => {
  return (
    <Card>
      <div className="flex flex-col">
        <div className="h-52 overflow-hidden">
          <img src={props.urlIMG} alt={props.name} />
        </div>
        <div className="h-28 p-5">
          <span className="block font-bold text-lg">{props.name}</span>
          <div className="flex justify-between items-start">
            <span className="block pr-5 text-sm">{props.description}</span>
            <span className="block w-fit py-1 px-4 text-white bg-red-600 rounded-lg">{`$${props.price.toFixed(
              2
            )}`}</span>
          </div>
        </div>
        <div className="h-36 p-5">
          <MealsItemForm name={props.name} />
        </div>
      </div>
    </Card>
  );
};

export default MealItem;
