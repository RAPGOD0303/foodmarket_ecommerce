import axios from "axios";
import productData from './Product.json'

function ItemList() {
    const handleAddData = async ()=>{
        console.log("Itemlist data",productData);
        
        try {
            const res = await axios.post("http://localhost:5000/api/add-data", productData);
            console.log("Itemlist JSON data", productData)
            alert(res.data.message)
            
        } catch (error) {
            console.log(error);
            alert("Error Adding Data")
        }
    }
  return (
    <>
      <div className="main-div">
            <div className="middle-part d-flex justify-content-center align-items-center">
                <button 
                className="btn btn-primary"
                onClick={handleAddData}
                >Add Data</button>
            </div>
      </div>
    </>
  );
}

export default ItemList;
