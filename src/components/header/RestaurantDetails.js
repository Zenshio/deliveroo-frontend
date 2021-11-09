const RestaurantDetails = ({ restaurant }) => {
  return (
    <div className="RestaurantDetails">
      <div className="container">
        <div className="RestaurantDetails-content">
          <div className="RestaurantDetails-text">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
          </div>
          <img
            className="RestaurantDetails-picture"
            src={restaurant.picture}
            alt="restaurant cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
