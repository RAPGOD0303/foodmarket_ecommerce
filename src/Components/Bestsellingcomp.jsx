import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "./ProductCard";

function Bestsellingcomp(props) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [data, setData] = useState([]);

useEffect(() => {
  // 👇 Code here runs after the component renders
  console.log("Component mounted or updated commancom" ,props);
  // Optional cleanup function
  return () => {
    console.log("Component unmounted or before next run");
  };
}, []);

  return (
    <div className="category container-fluid pt-5 pb-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="fw-bold category-header">{props.data.title}</h2>

        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="category-link fw-bold">
            View All Categories <HiOutlineArrowLongRight />
          </Link>
          <div className="swiper-btn d-flex gap-2">
            <button
              className={`btn ${props.left}`}
              disabled={isBeginning}
              style={{ opacity: isBeginning ? 0.5 : 1 }}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className={`btn ${props.right}`}
              disabled={isEnd}
              style={{ opacity: isEnd ? 0.5 : 1 }}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper with ProductCards */}
      <Swiper
        modules={[Navigation]}
       navigation={{
            nextEl: `.${props.right}`,           // ✅ tells Swiper: "use this selector for next button"
            prevEl: `.${props.left}`             // ✅ tells Swiper: "use this selector for prev button"
          }}
        spaceBetween={20}
        slidesPerView={6}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {props.data.data.map((product,index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Bestsellingcomp;
