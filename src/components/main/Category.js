import Meals from "./Meals";

const Category = ({ category, cart }) => {
  return (
    category.meals.length > 0 && (
      <div className="Category">
        <h2>{category.name}</h2>
        <Meals meals={category.meals} cart={cart} />
      </div>
    )
  );
};

export default Category;
