import React, { useContext, useState } from "react";
import "./payment.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { AxiosBase } from "../Api/BackendAPI";
import { DataContext } from "../../components/DataPrivider/DataProvider";
import { db } from "../../utility/Firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PaymetListItem from "./PaymetListItem";
import FormaterNumber from "../FormaterNumber/FormaterNumber";
import { Type } from "../../utility/Action.type";
function Payment() {
  const [Card_error, setError] = useState(null);
  const [paymentProcess, SetpaymentProcess] = useState(false);
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleError = (e) => {
    console.log(e.error.message);
    e.error.message ? setError(e.error.message) : setError("");
  };

  const HandlePayment = async (e) => {
    e.preventDefault();
    SetpaymentProcess(true);

    //back end // client secret key
    try {
      const response = await AxiosBase({
        method: "POST",
        url: `/payment/create?total=${totalPrice * 100}`,
      });
      const clientSecret = response.data.clientSecret;

      //rect side // conformation

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // after conformation store to firebase database and clear basket
      await db
        .collection("user")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      SetpaymentProcess(false);
      dispatch({
        type: Type.DELETE_ALL,
      });
      Swal.fire("Payment completed Success fully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const stripe = useStripe();
  const elements = useElements();
  return (
    <div className="Payment_container">
      <div className="Payment_inner_container">
        <hr />
        <div className="TITLE">
          Shopping Cart
          <div>
            <b>Deliver Address</b> <br />
            <small>{user.email}</small> <br />
            <small>AA. Ethiopian</small>
          </div>
        </div>
        <hr />
        <div className="Payment_list_title">
          <div>Product</div>
          <div>Quality</div>
          <div>Price</div>
        </div>
        <hr />
        <div>
          <div>
            {basket?.map((items) => {
              return <PaymetListItem items={items} key={items.id} />;
            })}
          </div>
        </div>
        <div className="total_price">
          <b>Total Price :</b>
          <b>
            <FormaterNumber number={totalPrice} />
          </b>
        </div>
        <hr />
        <div className="Card_container">
          <div className="Card_inner_container">
            <form onSubmit={HandlePayment}>
              {Card_error && (
                <small style={{ color: "red" }}> {Card_error}</small>
              )}
              <b>Payment Method </b>
              <div className="card_Element">
                <CardElement onChange={handleError} />
                <button type="submit" className="Pay_on">
                  {paymentProcess ? (
                    <img
                      style={{
                        alignItems: "center",
                        height: "5vh",
                      }}
                      src="../../../../public/Infinity@1x-1.0s-200px-200px.svg"
                      alt=""
                    />
                  ) : (
                    "Pay on"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
