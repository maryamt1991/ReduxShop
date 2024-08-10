import React from 'react'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { productQuantity, shortenText } from '../helpers/helper';
import styles from "./Card.module.css"
//import { useCart } from '../context/CartContext';
import { MdDeleteOutline } from 'react-icons/md';

function Card({ data }) {
  const { id, title, image, price } = data;
  //const [state,dispatch]=useCart();
//const quantity=productQuantity(state,id);
const quantity=0;
console.log(quantity)
  const clickHandler=(type)=>{
   // dispatch({type,payload:data})
  }
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
        {
            quantity>1 &&(<button onClick={()=>clickHandler("DECREASE")}>-</button>)
          }
          {!!quantity && <span>{quantity}</span>}
           {
            quantity===1 &&( <button onClick={()=>clickHandler("REMOVE-ITEM")}><MdDeleteOutline /></button>)
          }
          {quantity===0?(<button onClick={()=>clickHandler("ADD-ITEM")}><TbShoppingBagCheck /></button>):
          <button onClick={()=>clickHandler("INCREASE")}>+</button>
          }
         
          
          
        </div>
      </div>
    </div>
  )
}

export default Card