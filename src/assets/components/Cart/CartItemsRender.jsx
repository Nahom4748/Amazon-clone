import "./cart.css";
import { Type } from "../../utility/Action.type";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function CartItemsRender({ item, dispacher }) {
  const { id, title, price, category, description, image, rating, quantity } =
    item;

  const DropUp = () => {
    dispacher({
      type: Type.ADD_TO_BASKET,
      payload: {
        id,
        title,
        price,
        category,
        description,
        image,
        rating,
      },
    });
  };
  const DropDown = (id) => {
    dispacher({
      type: Type.UPDATE_QTY,
      payload: {
        id,
        title,
        price,
        category,
        description,
        image,
        rating,
      },
    });
  };

  const deleteItem = (itemId) => {
    dispacher({ type: Type.DELETE_ITEM, payload: itemId });
  };

  return (
    <div className="cartsItems_outer">
      <div className="cartsItems_inner">
        <div className="cartItems_Images">
          <img src={image} alt="" />
        </div>
        <div className="cartItems_description">
          <div className="cartItems_dep">
            <p>{description}</p>
          </div>
          <div className="cartItems_price">
            <b>${price}</b>
          </div>
          <div onClick={() => deleteItem(id)} className="cartItems_delete">
            <DeleteForeverIcon />
          </div>
        </div>
      </div>
      <div className="quantity">
        <span>Qty : </span>
        <span className="ArrowDropUpIcon" onClick={() => DropUp()}>
          <ArrowDropUpIcon className="ArrowDropUpIcon" />
        </span>
        <b>{quantity}</b>
        <span className="ArrowDropDownIcon" onClick={() => DropDown(id)}>
          <ArrowDropDownIcon />
        </span>
      </div>
      <hr />
    </div>
  );
}

export default CartItemsRender;
