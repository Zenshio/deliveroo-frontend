import CartDetails from "./CartDetails";

const Cart = ({ items, setItems }) => {
  return (
    <div className="Cart">
      <div className="Cart-content">
        <button
          className={
            items.length > 0
              ? "Cart-validate-btn"
              : "Cart-validate-btn disabled"
          }
        >
          Valider mon panier
        </button>
        {items.length > 0 ? (
          <CartDetails
            className="ResponsiveCart-details"
            items={items}
            setItems={setItems}
          />
        ) : (
          <div className="Cart-empty">Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
