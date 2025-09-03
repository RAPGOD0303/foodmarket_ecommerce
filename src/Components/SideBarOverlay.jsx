import "../CSS/Sidebar.css";
import { VscChromeClose } from "react-icons/vsc";
function SidebarOverlay({ show, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${show ? "show" : ""}`}
        
      ></div>

      {/* Sidebar */}
      
      <div className={`sidebar ${show ? "show" : ""}`}>
        
        <div className="closeBtn d-flex justify-content-center mt-3" 
        style={{cursor:"pointer"}}>
        <VscChromeClose  size={30} onClick={onClose}/>
      </div>
      <p>hellow</p>
      </div>
    </>
  );
}

export default SidebarOverlay;