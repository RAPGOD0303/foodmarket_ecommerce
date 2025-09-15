
import { FaRegHeart, FaStar } from "react-icons/fa";
import '../CSS/Product.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";


function ProductCard({ product }) {
  const [itemCount, setItemCount]= useState(1);
  const dispatch = useDispatch();

  const handleAddToCart= ()=>{
    const payload = {
      id : product.id ?? product.name,
      name : product.name,
      price : Number(product.price) ?? 0,
      image : product.image ?? "",
      unit : product.unit ?? "",
      qty: itemCount
    };
    dispatch(addtoCart(payload))
  }
  return (
    <div className="card card-main">
       <div className="card-img-container">
  {product.discount && (
        <span className="card-discount">
          {product.discount}
        </span>
      )}
  <div className="card-fav">
    <FaRegHeart />
  </div>
  <img
    src={product.image}
    alt={product.name}
    className="card-img-top"
    style={{width:'200px', height:'200px'}}
  />
  </div>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
      <span className="unit">{product.quantity} UNIT</span>
      <span className="star"><FaStar color="#f3cd53ff" /> {product.rating}</span>
    </p>
    <h3 className="fw-bold">${Number(product.price).toFixed(2)}</h3>
    <div className="card-actions d-flex justify-content-between">
      <div className="qty-control">
        <button className="dec-button" onClick={()=>setItemCount(itemCount - 1)}>-</button>
        <span className="item-quantity">{itemCount}</span>
        <button className="inc-button" onClick={()=>setItemCount(itemCount + 1)}>+</button>
      </div>  
      <button className="add-to-cart"
       onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
</div>
  );
}

export default ProductCard;