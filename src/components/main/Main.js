import Menu from "./Menu";
import Cart from "./Cart";

const Main = ({ categories, cart }) => {
  return (
    <main className="Main">
      <div className="container">
        <div className="Main-content">
          <Menu categories={categories} cart={cart} />
          <Cart items={cart.items} setItems={cart.setItems} />
        </div>
      </div>
    </main>
  );
};

export default Main;
