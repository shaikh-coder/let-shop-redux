import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.css";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state=> state.cartState.cartList);
  const[inCart,setInCart] = useState(false);

  const {id,name, price, image} = product;

  useEffect(()=>{
    const  productInCart = cartList.find(itmes=>itmes.id === id);
    if(productInCart){
      setInCart(true);
    }else{
      setInCart(false);
    }
  },[cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {inCart ? (<button className="remove" onClick={()=> dispatch(remove(product))}>remove To Cart</button> ) :(<button onClick={()=> dispatch(add(product))}>Add To Cart</button>)}
        
      </div>
    </div>
  )
}
