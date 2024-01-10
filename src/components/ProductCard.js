import { useDispatch,useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect, useState } from "react";


export const ProductCard = ({product}) => {
  const products = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const{id,name,image, price} = product;

  useEffect(() => {
    const productInCart = products.find(item => item.id === id)

    if(productInCart){
      setIsInCart(true);
    } else{
      setIsInCart(false);
    }
  }, [products, id])

  return (
    <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
          <p>${price}</p>
          {isInCart ? (<button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>) }
        </div>
    </div>
  )
}
