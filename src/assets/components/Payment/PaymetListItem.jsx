import React from "react";

function PaymetListItem({ items }) {
  const { image, title, quantity, price } = items;
  return (
    <>
      <div className="payment_list_items">
        <div>
          <img src={image} alt="" />
          <small className="Payment_title">{title}</small>
        </div>
        <div>
          <p>Qyt : {quantity}</p>
        </div>
        <div>
          <b>${price}</b>
        </div>
      </div>
      <hr />
    </>
  );
}

export default PaymetListItem;
