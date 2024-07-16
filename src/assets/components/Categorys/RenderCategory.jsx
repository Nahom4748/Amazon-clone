import React from "react";
import Categoryscss from "./category style/Category.module.css";

function RenderCategory({ data }) {
  return (
    <div className={Categoryscss.categort_item}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imglink} alt="" />
        <p>Shop more</p>
      </a>
    </div>
  );
}

export default RenderCategory;
