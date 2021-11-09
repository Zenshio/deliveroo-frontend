import TopBar from "./TopBar";
import RestaurantDetails from "./RestaurantDetails";

const Header = ({ restaurant }) => {
  return (
    <header className="Header">
      <TopBar />
      <RestaurantDetails restaurant={restaurant} />
    </header>
  );
};

export default Header;
