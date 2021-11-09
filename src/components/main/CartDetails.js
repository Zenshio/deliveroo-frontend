import CartAmount from "./CartAmount";
import CartItem from "./CartItem";

const CartDetails = ({ className, items, setItems }) => {
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const deliveryFee = 2.5;

  return (
    <div className={className}>
      <div className="Cart-items">
        {items.map((item, index) => {
          return (
            <CartItem
              key={index}
              index={index}
              item={item}
              items={items}
              setCartItems={setItems}
            />
          );
        })}
      </div>
      <div className="Cart-subtotal">
        <div className="Cart-subtotal-line">
          <div className="Cart-result-name">Sous-total</div>
          <CartAmount amount={subtotal} />
        </div>
        <div className="Cart-subtotal-line">
          <div className="Cart-result-name">Frais de livraison</div>
          <CartAmount amount={deliveryFee} />
        </div>
      </div>

      <div className="Cart-total">
        <div className="Cart-result-name">Total</div>
        <CartAmount amount={subtotal + deliveryFee} />
      </div>
    </div>
  );
};

export default CartDetails;
