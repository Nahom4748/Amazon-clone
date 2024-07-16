import "./App.css";
import Categorys from "./assets/components/Categorys/Categorys";
import Header from "./assets/components/Header/Header";
import HeroPages from "./assets/components/HeroPages/HeroPages";
import Items from "./assets/components/Items/Items";

function App() {
  return (
    <>
      <Header />
      <HeroPages />
      <Categorys />
      <Items />
    </>
  );
}

export default App;
