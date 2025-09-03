
import { FaRegHeart, FaStar } from "react-icons/fa";
import '../CSS/Product.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";


function ProductCard({ product }) {
  const [itemCount, setItemCount]= useState(1);
  const dispatch = useDispatch();
  return (
    <div className="card card-main">
       <div className="card-img-container">
  <span className="card-discount">-30%</span>
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
      <span className="unit">{product.unit}</span>
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
       onClick={()=>dispatch(addtoCart(product.name, product.unit))}>Add to Cart</button>
    </div>
  </div>
</div>
  );
}

export default ProductCard;
