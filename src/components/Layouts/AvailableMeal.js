import SideScroller from "../UI/SideScroller";
import MealItem from "../Meals/MealItem";
import ChevronLeft from "../svg-icons/ChevronLeft";
import ChevronRight from "../svg-icons/ChevronRight";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    urlIMG:
      "https://images.unsplash.com/photo-1615750824451-cdf6c3b7e06a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VzaGl8fHx8fHwxNjUxODc2NDMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    urlIMG:
      "https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8c2Nobml0emVsfHx8fHx8MTY1MTg3NjQ4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    urlIMG:
      "https://images.unsplash.com/photo-1491960693564-421771d727d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVyZ2VyfHx8fHx8MTY1MTg3NjU2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    urlIMG:
      "https://images.unsplash.com/photo-1543339318-b43dc53e19b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FsYWR8fHx8fHwxNjUxODc2NjM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Takoyaki",
    urlIMG:
      "https://images.unsplash.com/photo-1648389375553-cd95505f5729?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFrb3lha2l8fHx8fHwxNjUxODc2NzU4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
    description: "Squid ball",
    price: 10.99,
  },
  {
    id: "m6",
    name: "Ramen",
    urlIMG:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFtZW58fHx8fHwxNjUxODc2Mzc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
    description: "Fresh Slurpy and Meaty..",
    price: 12.99,
  },
];

const AvailableMeal = () => {
  return (
    <div className="container mx-auto my-12 relative">
      <p className="text-xl pl-5 -mt-6 absolute top-8 left-0">
        <span className="font-bold">Fresh</span> from the Best Chef's hands
      </p>
      <SideScroller width="130vw">
        <div className="w-full flex flex-row justify-evenly items-start gap-6 ">
          {DUMMY_MEALS.map((item) => (
            <MealItem
              key={item.id}
              id={item.id}
              name={item.name}
              urlIMG={item.urlIMG}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </SideScroller>
      <button className="chevron-left bg-white w-10 h-10 grid place-items-center rounded-full shadow-lg absolute border-2 border-black top-1/2 -left-12">
        <div className="transition-all duration-300 ease-out">
          <ChevronLeft />
        </div>
      </button>
      <button className="chevron-right bg-white w-10 h-10 grid place-items-center rounded-full shadow-lg absolute border-2 border-black top-1/2 -right-12">
        <div className="transition-all duration-300 ease-out">
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};

export default AvailableMeal;
