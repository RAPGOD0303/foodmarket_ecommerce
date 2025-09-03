import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";

function CartDropdown() {
    const cartItem = useSelector((state)=>state.cart.cart) 
    console.log("Cart Data = ",cartItem);
    
  return (
    <>
      <div className="cart-dropdown-list">
        {cartItem.lenght === 0 ?
        (<p>Your Cart is empty</p>)
    :
    (
        <ListGroup>
            {
                cartItem.map((item, index)=>(
                    <ListGroup.Item key={index}>
                        {item.name} - {item.unit}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )}
      </div>
    </>
  );
}

export default CartDropdown;
