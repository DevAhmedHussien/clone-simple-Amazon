    import {React,useContext} from "react";
    // import { useAuth } from "../context/GlobalState";
    import starIcon from "../images/icons/star.png";
    import "./Product.css";
    import { GlobalContext } from "../context/GlobalState"
    const Product = ({ title, price, image, rating, id }) => {
        const context = useContext(GlobalContext)
        const { user ,setUser} = context
    // const { dispatch } = useAuth();

    const addToBasket = () => {
        setUser({...user, 
            basket:[...user.basket, 
        {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }
        ]})
        // dispatch({
        // type: "ADD_TO_BASKET",
        // item: {
        //     id: id,
        //     title: title,
        //     image: image,
        //     price: price,
        //     rating: rating,
        // },
        // });
    };
    return (
        <div className="product">
        <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
        </div>
        <div className="product-rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p key={i}>
                <img src={starIcon} alt="starIcon" />
                </p>
            ))}
        </div>
        <img src={image} alt="product-img" />
        <button onClick={addToBasket}
        >Add to Basket</button>
        </div>
    );
    };

    export default Product;
