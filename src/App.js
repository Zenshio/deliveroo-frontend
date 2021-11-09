import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ResponsiveCart from "./components/main/ResponsiveCart";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ls-deliveroo.herokuapp.com");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Header restaurant={data.restaurant} />
      <Main
        categories={data.categories}
        cart={{ items: cartItems, setItems: setCartItems }}
      />
      <Footer />
      <ResponsiveCart items={cartItems} setItems={setCartItems} />
    </div>
  );
};

export default App;
