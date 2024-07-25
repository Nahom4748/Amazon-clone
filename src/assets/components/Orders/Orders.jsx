import React, { useContext, useEffect, useState } from "react";
import "./orederstyle.css";
import { DataContext } from "../DataPrivider/DataProvider";
import { db } from "../../utility/Firebase";
import Modal from "react-modal";
import CancelIcon from "@mui/icons-material/Cancel";
import RenderOrders from "./RenderOrders";
import Swal from "sweetalert2";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Orders() {
  const [{ user, dispatch }] = useContext(DataContext);
  const [orders, setorders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setorders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setorders([]);
    }
  }, []);
  console.log(orders);

  return (
    <>
      {user ? (
        <div className="orders_container">
          <div className="orders_inner_container">
            <div className="ordersTitle">
              <h3>Your Orders</h3>
            </div>
            <div className="orders_title">
              <p>Order Id </p>
              <p>Created</p>
              <p>Status</p>
              <p>Total</p>
              <p>Images</p>
            </div>

            <div className="echorder_outer">
              {orders?.map((echOrder) => {
                return (
                  <div key={echOrder.id} className="ech_orders">
                    <p>{echOrder?.id}</p>
                    <p>{echOrder?.data?.created}</p>
                    <p>Completed</p>
                    <p>
                      <b>
                        ${echOrder?.data?.amount} for{" "}
                        {echOrder?.data?.basket?.length}
                      </b>{" "}
                      Items
                    </p>
                    {echOrder?.data?.basket?.map((Element, index) => {
                      return (
                        <img
                          className="element_img"
                          key={index}
                          src={Element.image}
                          alt=""
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="No_user">
          <div className="No_user_container">
            <h2>NO USER FOUND </h2>
            <h2>
              You Have To <Link to="/auth">Login</Link> or{" "}
              <Link to="/auth">SignUp</Link>
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
