import Nav from 'react-bootstrap/Nav';
import '../CSS/Trendingcomp.css'
import ProductCard from './ProductCard';
import { useState } from 'react';
import jsnofile from './Product.json';
function Trendingcomp() {
    const [products, setProducts]  = useState(jsnofile);
    const [activeTab, setActiveTab] = useState("ALL");


    const filteredProducts = 
    activeTab === "ALL"
    ? products
    : products.filter((p)=>p.Category === activeTab)
 return (
   <>
     <div className=" Trending container-fluid pt5 pb-2 w-100 h-auto">
       <div className="d-flex justify-content-between mb-5">
         <h2 className="fw-bold trending-header">Trending Products</h2>
         <div className="d-flex align-items-center gap-3">
           <Nav 
           variant="tabs" 
           activeKey={activeTab}
           onSelect={(selectedKey)=>setActiveTab(selectedKey)}>
             <Nav.Item>
               <Nav.Link eventKey="ALL">ALL</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link  eventKey="Fruits and Veges">FRUITS & VEGES</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link  eventKey="Juices" >
                 JUICES
               </Nav.Link>
             </Nav.Item>
           </Nav>
         </div>
       </div>
        
     </div>
     <div className=" card-list h-100vh">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
   </>
 );
}

export default Trendingcomp;
