import lib from "../../lib/lib";
import MealPopular from "./MealPopular";

const Meal = ({ meal, cart }) => {
  const handleClick = () => {
    const cartItems = [...cart.items];
    const index = cartItems.findIndex((item) => item.id === meal.id);

    if (index !== -1) {
      cartItems[index].quantity++;
      cartItems[index].price = meal.price * cartItems[index].quantity;
    } else {
      cartItems.push({
        id: meal.id,
        title: meal.title,
        quantity: 1,
        price: parseFloat(meal.price),
      });
    }

    cart.setItems(cartItems);
  };

  return (
    <div className="Meal" onClick={handleClick}>
      <div className="Meal-content">
        <div className="Meal-text">
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <div className="Meal-details">
            <span className="Meal-price">{lib.format(meal.price)}</span>
            {meal.popular && <MealPopular />}
          </div>
        </div>
        {meal.picture && (
          <div className="Meal-picture">
            <img src={meal.picture} alt={meal.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
