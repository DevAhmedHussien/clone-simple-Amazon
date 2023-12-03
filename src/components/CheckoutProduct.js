import {useContext,React} from "react";
// import { useAuth } from "../context/GlobalState";
import starIcon from "../images/icons/star.png";
import "./CheckoutProduct.css";
import { GlobalContext } from "../context/GlobalState"

const CheckoutProduct = ({ hub, image, title, price, rating, hiddenButton }) => {
  const context = useContext(GlobalContext)
  const { user,setUser , removeFromBasket} = context  

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" alt='' src={image} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <img src={starIcon} alt="" />
              </p>
            ))}
        </div>
        {!hiddenButton && (
          <button
          onClick={()=>{removeFromBasket(hub)}}
          >Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
