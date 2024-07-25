import React, { useEffect, useState } from "react";
import axios from "axios";
import Renderitems from "./RenderItems";
import itemscss from "./items style/items.module.css";

function Items() {
  const [itemlist, Setitemlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => Setitemlist(res.data));
  }, []);
  return (
    <div className={itemscss.items_list}>
      {itemlist.map((item) => {
        return <Renderitems item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Items;
