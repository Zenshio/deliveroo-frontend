import Category from "./Category";

const Menu = ({ categories, cart }) => {
  return (
    <div className="Menu">
      {categories.map((category, index) => {
        return <Category key={index} category={category} cart={cart} />;
      })}
    </div>
  );
};

export default Menu;
