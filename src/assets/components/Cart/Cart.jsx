import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataPrivider/DataProvider";
import "./cart.css";
import CartItemsRender from "./CartItemsRender";
import FormaterNumber from "../FormaterNumber/FormaterNumber";
import { TotaOreder } from "./TotaOreder";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const [totalamunt, SetTotalAmount] = useState();
  useEffect(() => {
    const totalPrice = basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    SetTotalAmount(totalPrice);
  }, [basket]);
  return (
    <>
      {basket.length == 0 ? (
        <div className="empty_cart">
          <h1>Your Amazon Cart is empty.</h1>
          <hr />
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt=""
          />
          <hr />
        </div>
      ) : (
        <div className="carts">
          <div className="cartList">
            <div className="cartTitle">
              <h2>Shopping Cart</h2>
              <small>Price</small>
            </div>
            <hr />
            <div className="shopcart">
              {basket?.map((element) => (
                <CartItemsRender
                  item={element}
                  key={element.id}
                  dispacher={dispatch}
                />
              ))}
              <hr />

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

              <div className="button_check_container">
                {user ? (
                  <button
                    onClick={() => navigate("/payment")}
                    className="button_check_in"
                  >
                    Processed to check out
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/auth")}
                    className="button_check_in"
                  >
                    Sign in Before process
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
