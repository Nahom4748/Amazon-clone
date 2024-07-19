import "./App.css";
import { Routes, Route } from "react-router-dom";
import Outlate from "./assets/components/Outlate/Outlate";
import Home from "./assets/components/Outlate/Home";
import MoreCatagortys from "./assets/components/MoreDetailCategorys/MoreCatagortys";
import Cart from "./assets/components/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlate />}>
        <Route index element={<Home />} />
        <Route path="/morecatagorys/:morecata" element={<MoreCatagortys />} />
        <Route path="/carts" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
