import {React,useContext,useEffect,useState} from "react";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "../context/AppReducer";
// import { useAuth } from "../context/GlobalState"; 
import { GlobalContext } from "../context/GlobalState"
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { user, getBasketTotal , price } = context
   

    useEffect(()=>{
      getBasketTotal(user.basket)  
      }
    ,[user])
  return (
    <div className="subtotal">
      {/* <div
        renderText={(value) => (
          <>
            <p>
              Subtotal ({user.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(user.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> */}
       <p> Subtotal ({user.basket.length} items): <strong>{price}</strong></p>
       <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      <button onClick={() => navigate("/payment") }>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
