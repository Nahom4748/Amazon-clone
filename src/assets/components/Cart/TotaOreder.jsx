import React, { useContext } from "react";
import { DataContext } from "../DataPrivider/DataProvider";

export const TotaOreder = () => {
  const [state, dispacher] = useContext(DataContext);
  const totalOrder = state.basket.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <span>
      <b>{totalOrder}</b>
    </span>
  );
};
