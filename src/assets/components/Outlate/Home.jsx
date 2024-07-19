import React from "react";
import Categorys from "../Categorys/Categorys";
import HeroPages from "../HeroPages/HeroPages";
import Items from "../Items/Items";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <HeroPages />
      <Categorys />
      <Items />
    </>
  );
}

export default Home;
