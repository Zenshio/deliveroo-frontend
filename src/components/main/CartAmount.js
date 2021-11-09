import lib from "../../lib/lib";

const CartAmount = ({ amount }) => {
  return <span className="Cart-amount">{lib.format(amount)}</span>;
};

export default CartAmount;
