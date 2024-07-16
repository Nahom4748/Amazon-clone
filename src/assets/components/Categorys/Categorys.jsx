import React, { useEffect } from "react";
import Categocss from "./category style/Category.module.css";
import categoryData from "./catalogs";
import RenderCategory from "./RenderCategory";

function Categorys() {
  return (
    <div className={Categocss.category}>
      {categoryData.map((category) => (
        <RenderCategory data={category} />
      ))}
    </div>
  );
}

export default Categorys;
