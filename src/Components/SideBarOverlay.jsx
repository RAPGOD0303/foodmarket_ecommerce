import "../CSS/Sidebar.css";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { removefromCart, clearCart } from "../redux/cartSlice";// <-- import remove action
import { RiDeleteBin6Line } from "react-icons/ri"; 
import axios from "axios";
function SidebarOverlay({ show, onClose }) {
  const dispatch = useDispatch();
  const itemInCart = useSelector((state) => state.cart.cart);

  const totalPrice = itemInCart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/checkout", {
      cartItems: itemInCart,
    });

    alert(res.data.message || "Checkout successful!");
    dispatch(clearCart());
    onClose();
  } catch (error) {
    console.error("Checkout error:", error);

    // If backend sent custom message, show it
    if (error.response && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong during checkout");
    }
  }
};

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
              className="items-body d-flex align-items-center justify-content-between my-2"
            >
              <div className="d-flex align-items-center">
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

              {/* --- Remove Button --- */}
              <button
                className="m-2"
                onClick={() => dispatch(removefromCart(item.id))}
                style={{border:'none',
                  backgroundColor:'transparent'
                }}
              ><RiDeleteBin6Line />
              </button>
            </div>
          ))}

          {/* --- Total Price Section --- */}
          <div className="checkout-footer d-flex justify-content-between align-items-center mt-3 p-2 border-top">
            <h5>Total:</h5>
            <h5 className="fw-bold">${totalPrice.toFixed(2)}</h5>
          </div>
        </div>

        <div
          className="checkout-div d-flex justify-content-center"
          style={{
            width: "100%",
            marginTop: "10%",
          }}
        >
          <button
            className="checkout-btn mx-2 p-2 fw-bold"
            style={{
              width: "100%",
              borderRadius: "5px",
              color: "#fff",
              backgroundColor: "#ebbc11ff",
              fontSize: "20px",
              border: "none",
            }}
            onClick={handleCheckout}
          >
            Continue to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default SidebarOverlay;
