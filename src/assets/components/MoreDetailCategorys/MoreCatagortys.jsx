import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RenderItems from "../Items/RenderItems";
import itemscss from "../Items/items style/items.module.css";

function MoreCatagortys() {
  const params = useParams();
  const [Result, SetResult] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${params.morecata}`)
      .then((res) => SetResult(res.data));
  }, []);
  return (
    <div>
      <div>
        <h2>Result </h2>
        <h3>{params.morecata}</h3>
        <hr />
      </div>
      <div className={itemscss.items_list_more}>
        {Result.map((elements, i) => (
          <RenderItems item={elements} key={i} />
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default MoreCatagortys;
