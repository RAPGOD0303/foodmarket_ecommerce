import "../CSS/Sidebar.css";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
function SidebarOverlay({ show, onClose }) {

  const itemInCart = useSelector((state) => state.cart.cart);
  // console.log("SideBar data = ", itemInCart);

  const totalPrice = itemInCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
  
  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${show ? "show" : ""}`}></div>

      {/* Sidebar */}

      <div className={`sidebar ${show ? "show" : ""}`}>
        <div
          className="closeBtn d-flex justify-content-center mt-3 mb-2"
          style={{ cursor: "pointer" }}
        >
          <VscChromeClose size={23} color="gray" onClick={onClose} />
        </div>

        <div className="checkout-main ms-3">
  <div className="checkout-header d-flex align-items-center justify-content-between">
    <h4 className="fw-bold" style={{ color: "rgb(237, 214, 40)" }}>
      Your Cart
    </h4>
    <div className="cart-price mx-2">{itemInCart.length}</div>
  </div>

  {itemInCart.map((item, index) => (
    <div
      key={item.id ?? index}
      className="items-body d-flex align-items-center my-2"
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <div>
        <p className="fw-bold">{item.name}</p>
        <p>
          ${item.price} × {item.qty}
        </p>
        <p className="text-muted small">
          Subtotal: ${(item.price * item.qty).toFixed(2)}
        </p>
      </div>
    </div>
  ))}

  {/* --- Total Price Section --- */}
  <div className="checkout-footer d-flex justify-content-between align-items-center mt-3 p-2 border-top">
    <h5>Total:</h5>
    <h5 className="fw-bold">${totalPrice.toFixed(2)}</h5>
  </div>
</div>

      </div>
    </>
  );
}

export default SidebarOverlay;
