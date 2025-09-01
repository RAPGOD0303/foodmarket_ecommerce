import '../CSS/Banner.css'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { Card, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Pagination, Autoplay } from "swiper/modules";
import I1 from '../images/product-thumb-1.png'
import I2 from '../images/product-thumb-2.png'
import I3 from '../images/ad-image-1.png'
import I4 from '../images/ad-image-2.png'
import Categorycomp from './Categorycomp';
import Trendingcomp from './Trendingcomp';
// import ContactUS from './ContactUS';

function Bannercomp() {
  const bannerData = [
    {
      topText: "100% Natural",
      mainHeading: "Fresh Smoothie & Summer Juice",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.",
      buttonText: "SHOP NOW",
      image: { src: I1, alt: "Smooth Fruit Juice" }
    },
    {
      topText: "100% Natural",
      mainHeading: "Fresh Smoothie & Summer Juice",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.",
      buttonText: "SHOP COLLECTION",
      image: { src: I1, alt: "Smooth Fruit Juice" }
    },
    {
      topText: "100% Natural",
      mainHeading: "Heinz Tomato Ketchup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.",
      buttonText: "SHOP COLLECTION",
      image: { src: I2, alt: "Smooth Fruit Juice" }
    }
  ];

  return (
    <>
      <div className="banner-main">
        <div className="banner-swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
          >
            {bannerData.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="banner-card">
                  {/* Text / Body */}
                  <div className="card-body-wrapper">
                    <Card.Body>
                      <Card.Title>{item.topText}</Card.Title>
                      <Card.Text as="h4">{item.mainHeading}</Card.Text>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="primary">{item.buttonText}</Button>
                    </Card.Body>
                  </div>

                  {/* Image */}
                  <div className="card-img-wrapper">
                    <Card.Img src={item.image.src} alt={item.image.alt} />
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="banner-second-part w-50 h-100 container-fluid"
          
        >
          <div
            className="first-add h-50 w-100 d-flex align-items-center"
          > 
            <div className="fadd-data ">
              <h1>20% Off</h1>
              <span>SALE</span>
              <h3>Fruits & Vegetables</h3>
              <Link to="/banner" className='shop-link'>
                Shop Collection <FaArrowRight />{" "}
              </Link>
            </div>
            <div className="fadd-image d-flex align-items-end" >
              <img src={I3} alt="grocery image" />
            </div>
          </div>

          <div
            className="first-add h-50 w-100 d-flex align-items-center"
            style={{backgroundColor:'#ffe7df'}}
          > 
            <div className="fadd-data">
              <h1>15% Off</h1>
              <span>SALE</span>
              <h3>Baked Products</h3>
              <Link to="/banner" className='shop-link'>
                Shop Collection <FaArrowRight />{" "}
              </Link>
            </div>
            <div className="fadd-image d-flex align-items-end" >
              <img src={I4} alt="grocery image" />
            </div>
          </div>

        </div>
      </div>
      <Categorycomp/>
      <Trendingcomp/>
      {/* <ContactUS/> */}
    </>
  );
}

export default Bannercomp;
