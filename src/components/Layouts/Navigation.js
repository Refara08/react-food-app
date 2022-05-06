import { useState, useEffect } from "react";
import CartIcon from "../svg-icons/CartIcon";
import AccountIcon from "../svg-icons/AccountIcon";

const linkStyle = "inline-block py-1 px-2 mx-2 relative";
const linkHover =
  "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black hover:before:w-full before:transition-all before:duration-300 before:ease-linear";
const iconHover = "hover:scale-110 transition-all duration-300 ease-linear";

const Navigation = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  // still couldn't figure out how to animate in react properly!!!
  const hamburgerHandler = () => {
    if (!isBurgerActive) {
      setIsBurgerActive(true);
    } else {
      setIsBurgerActive(false);
    }
  };

  return (
    <nav className="p-8 shadow-md sticky top-0">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold font-inter mr-8">React Meals</h1>
        <div className="hidden links lg:flex justify-evenly items-center">
          <a className={`${linkStyle} ${linkHover}`} href="/">
            Home
          </a>
          <a className={`${linkStyle} ${linkHover}`} href="/">
            Menu
          </a>
          <a className={`${linkStyle} ${linkHover}`} href="/">
            About us
          </a>
          <a className={`${linkStyle} ${linkHover}`} href="/">
            Contact
          </a>
        </div>
        <div className="nav-link-group flex-[1] flex flex-row justify-end gap-3 items-center">
          <div
            className={`cart w-[25px] mx-5 relative cursor-pointer ${iconHover}`}
          >
            <CartIcon />
            <span className="badge">3</span>
          </div>
          <div
            className={`hidden lg:block ur-account w-[25px] mx-5 cursor-pointer ${iconHover}`}
          >
            <AccountIcon />
          </div>
        </div>
        <div
          className="w-[30px] h-[30px] grid place-items-center"
          onClick={hamburgerHandler}
        >
          <div
            className={`hamburger ${!isBurgerActive ? "deactive" : "active"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
