import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataPrivider/DataProvider";
import "./cart.css";
import CartItemsRender from "./CartItemsRender";
import FormaterNumber from "../FormaterNumber/FormaterNumber";
import { TotaOreder } from "./TotaOreder";

function Cart() {
  const [state, dispacher] = useContext(DataContext);
  const [totalamunt, SetTotalAmount] = useState();
  useEffect(() => {
    const totalPrice = state.basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    SetTotalAmount(totalPrice);
  }, [state]);
  return (
    <div className="carts">
      <div className="cartList">
        <div className="cartTitle">
          <h2>Shopping Cart</h2>
          <small>Price</small>
        </div>
        <hr />
        <div className="shopcart">
          {state.basket.map((element) => (
            <CartItemsRender
              item={element}
              key={element.id}
              dispacher={dispacher}
            />
          ))}
          <div className="totalamount">
            <div>
              <b>
                Subtotal (
                <TotaOreder />
                items):
              </b>
            </div>
            <div>
              <b>
                <FormaterNumber number={totalamunt} />
              </b>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="cartAmount">
        <div className="cartlistitem">
          <div className="leftcart">
            <div>
              <b>
                Subtotal (
                <TotaOreder />
                items):
              </b>
            </div>
            <div>
              <b>
                <FormaterNumber number={totalamunt} />
              </b>
            </div>
          </div>

          <div>
            <button>Processed to check out </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
