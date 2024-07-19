import React from "react";
import Categoryscss from "./category style/Category.module.css";
import { useNavigate } from "react-router-dom";

function RenderCategory({ data }) {
  const navigate = useNavigate();
  return (
    <div className={Categoryscss.categort_item}>
      <div
        onClick={() => navigate(`/morecatagorys/${data.name}`)}
        className={Categoryscss.allcont}
      >
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imglink} alt="" />
        <p>Shop more</p>
      </div>
    </div>
  );
}

export default RenderCategory;
