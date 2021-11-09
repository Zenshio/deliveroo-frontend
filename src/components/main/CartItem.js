import CartItemMinus from "./CartItemMinus";
import CartItemPlus from "./CartItemPlus";
import CartAmount from "./CartAmount";

const CartItem = ({ index, item, items, setCartItems }) => {
  const handleClick = (action) => {
    const cartItems = [...items];
    const index = cartItems.findIndex((i) => i.id === item.id);
    const price = item.price / item.quantity;

    switch (action) {
      case "add":
        cartItems[index].quantity++;
        break;
      case "remove":
        cartItems[index].quantity--;

        break;
      default:
        cartItems[index].quantity = 1;
        break;
    }

    if (cartItems[index].quantity > 0) {
      cartItems[index].price = price * cartItems[index].quantity;
    } else {
      cartItems.splice(index, 1);
    }
    setCartItems(cartItems);
  };

  return (
    <div className="Cart-item">
      <div className="Cart-item-quantity">
        <CartItemMinus handleClick={handleClick} action="remove" />
        <span>{item.quantity}</span>
        <CartItemPlus handleClick={handleClick} action="add" />
      </div>
      <span className="Cart-item-name">{item.title}</span>
      <CartAmount amount={item.price} />
    </div>
  );
};

export default CartItem;
