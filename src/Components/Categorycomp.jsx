import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import IC1 from '../images/icon-vegetables-broccoli.png'
import IC2 from '../images/icon-bread-baguette.png'
import IC3 from '../images/icon-bread-herb-flour.png'
import IC4 from '../images/icon-soft-drinks-bottle.png'
import IC5 from '../images/icon-wine-glass-bottle.png'
import IC6 from '../images/icon-animal-products-drumsticks.png'
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "../CSS/Category.css";
import { useState } from "react";

function Categorycomp() {
  const categories = [
    { icon: IC1 , name: "Fruits & Veges" },
    { icon: IC2, name: "Breads & Sweets" },
    { icon: IC4, name: "Beverages" },
    { icon: IC5, name: "Wines" },
    { icon: IC6, name: "Meat" },
    { icon: IC3, name: "Groceries" },
    { icon: IC3, name: "Groceries" },
    { icon: IC3, name: "Groceries" },
    { icon: IC3, name: "Groceries" },
    { icon: IC4, name: "Beverages" },
    { icon: IC5, name: "Wines" },
    { icon: IC6, name: "Meat" }
  ];
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);    
  return (
    <>
      <div className="category container-fluid pt-5 pb-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold category-header">Category</h2>

          <div className="d-flex align-items-center gap-3">
            <Link to="/" className="category-link fw-bold">
              View All Categories <HiOutlineArrowLongRight />
            </Link>
            <div className="swiper-btn d-flex gap-2">
              <button className="btn swiper-btn-prev"
              disabled={isBeginning}
              style={{opacity: isBeginning? 0.5:1}}>
                <MdKeyboardArrowLeft />
              </button>
              <button className="btn swiper-btn-next"
              disabled={isEnd}
              style={{opacity: isEnd? 0.5:1}}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="swiper-div ms-5 mb-4"  >
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          spaceBetween={20}
          slidesPerView={6}
          loop={false}
          onSlideChange={(swiper)=>{
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="demo1"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i} >
              <div className="category-card">
                <div className="icon d-flex justify-content-center">
                  <img src={cat.icon} alt={cat.name} />
                </div>
                <p className="fw-medium">{cat.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  );
}

export default Categorycomp;
