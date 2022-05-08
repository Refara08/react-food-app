import { useState } from "react";

import Navigation from "./components/Layouts/Navigation";
import Header from "./components/Layouts/Header";
import AvailableMeal from "./components/Layouts/AvailableMeal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Navigation onOpenCart={openCartHandler} />
      <Header />
      <AvailableMeal />
    </CartProvider>
  );
}

export default App;
