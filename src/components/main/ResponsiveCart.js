import CartAmount from "./CartAmount";
import CartDetails from "./CartDetails";
import { useState } from "react";

const ResponsiveCart = ({ items, setItems }) => {
  const [rcartDisplay, setRcartDisplay] = useState(false);

  const nbProducts = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const deliveryFee = 2.5;

  const handleClick = () => {
    setRcartDisplay(!rcartDisplay);
  };

  return (
    <div className="ResponsiveCart-container">
      {items.length > 0 ? (
        <>
          {rcartDisplay ? (
            <>
              <div className="ResponsiveCart-close" onClick={handleClick}>
                X
              </div>
              <CartDetails
                className="ResponsiveCart-details"
                items={items}
                setItems={setItems}
              />
              <button
                className="ResponsiveCart-btn"
                style={{ justifyContent: rcartDisplay && "center" }}
              >
                <span>Valider le panier</span>
              </button>
            </>
          ) : (
            <button
              className="ResponsiveCart-btn"
              style={{ justifyContent: !rcartDisplay && "space-between" }}
              onClick={handleClick}
            >
              <span className="ResponsiveCart-nb-products">{nbProducts}</span>
              <span>Voir le panier</span>
              <CartAmount amount={subtotal + deliveryFee} />
            </button>
          )}
        </>
      ) : (
        <button className="ResponsiveCart-btn-disabled" disabled>
          <span>Voir le panier</span>
        </button>
      )}
    </div>
  );
};

export default ResponsiveCart;
