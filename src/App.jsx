import "./App.css";
import { Routes, Route } from "react-router-dom";
import Outlate from "./assets/components/Outlate/Outlate";
import Home from "./assets/components/Outlate/Home";
import MoreCatagortys from "./assets/components/MoreDetailCategorys/MoreCatagortys";
import Cart from "./assets/components/Cart/Cart";
import Auth from "./assets/Auth/Auth";
import Payment from "./assets/components/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect } from "react";
import { DataContext } from "./assets/components/DataPrivider/DataProvider";
import { auth } from "./assets/utility/Firebase";
import { Type } from "./assets/utility/Action.type";
import ProtectedRouter from "./assets/components/ProtectedRout/ProtectedRouter";
import Orders from "./assets/components/Orders/Orders";
const stripePromise = loadStripe(
  "pk_test_51PehSjEzMFAAfuNzO984iQ0nx76tjDHmANkhBsyIfe1GeLxy1tmiUNjf1EHnpjLXWD06mhq82obAuefvvAwjAdys00R7VOpVST"
);

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((userauth) => {
      if (user) {
        dispatch({
          type: Type.USER_AUTH,
          user: userauth,
        });
      } else {
        dispatch({
          type: Type.USER_AUTH,
          user: userauth,
        });
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Outlate />}>
        <Route index element={<Home />} />
        <Route path="/morecatagorys/:morecata" element={<MoreCatagortys />} />
        <Route path="/carts" element={<Cart />} />
        <Route
          path="/payment"
          element={
            <ProtectedRouter
              msg={"You Must log in to Pay "}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRouter>
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
