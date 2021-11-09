import Menu from "./Menu";
import Cart from "./Cart";
import ResponsiveCart from "./ResponsiveCart";

const Main = ({ categories, cart }) => {
  return (
    <main className="Main">
      <div className="container">
        <div className="Main-content">
          <Menu categories={categories} cart={cart} />
          <Cart items={cart.items} setItems={cart.setItems} />
        </div>
      </div>
      <ResponsiveCart items={cart.items} setItems={cart.setItems} />
    </main>
  );
};

export default Main;
