import Meal from "./Meal";

const Meals = ({ meals, cart }) => {
  return (
    <div className="Meals">
      {meals.map((meal, index) => {
        return <Meal key={index} meal={meal} cart={cart} />;
      })}
    </div>
  );
};

export default Meals;
