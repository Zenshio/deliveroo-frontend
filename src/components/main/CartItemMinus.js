const CartItemMinus = ({ handleClick, action }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-circle"
      style={{
        width: 20,
        height: 20,
        color: "rgb(0, 206, 189)",
        cursor: "pointer",
      }}
      onClick={() => handleClick(action)}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export default CartItemMinus;
