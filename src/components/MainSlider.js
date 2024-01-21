import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper' styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

//import required modules
import { Pagination } from "swiper";
import CameraImg1 from "../img/mainpromo2.png";
import CameraImg2 from "../img/mainpromo1.png";
import CameraImg3 from "../img/mainpromo3.png";
//components
// import Product from "../components/Product";

// data
const sliderData = [
  {
    img: CameraImg1,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
  {
    img: CameraImg2,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
  {
    img: CameraImg3,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="productSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2x1"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                <div className="w-full lg:flex-1 ">
                  <div className="uppercase mb-1 text-center">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="btn btn-accent my-0 mx-auto lg:mx-0 ">
                    Shop now
                  </button>
                </div>
                <div className="flex-1">
                  <img
                    className="xl:absolute xl:-right-16 xl:-botton-12 -mr-12 w-auto h-auto"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
