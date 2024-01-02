import React from "react";
//import components
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";

//images
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb=[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg  lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promo imgaes */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] mb-8">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium loading-tight mb-4">
                  Save 25% on mirrorless cameras
                </div>
                <a href="#" className="uppercase text-persianyellow ">
                  Shop Now
                </a>
              </div>
              <img
                src={PromoImg2}
                className="absolute z-20 top-4 -right-4"
                alt="promo img"
              />
            </div>
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium loading-tight mb-4">
                  Save 35% on all dslr cameras
                </div>
                <a href="#" className="uppercase text-persianyellow ">
                  Shop Now
                </a>
              </div>
              <img
                src={PromoImg1}
                className="absolute z-20 -top-4 -right-4"
                alt="promo img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
