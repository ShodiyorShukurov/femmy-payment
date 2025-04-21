import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import slider from '../assets/slider.jpg';
import close from '../assets/close.svg';

function Header() {

  function closeWebView() {
    if (window.CloseWebViewChannel) {
      CloseWebViewChannel.postMessage("close");
    } else {
      window.history.back(); 
    }
  }

  return (
    <div className="relative rounded-t-[24px] overflow-hidden container">
      <button
        className="absolute z-50 top-4 right-4 cursor-pointer"
        onClick={closeWebView}
      >
        <img src={close} alt="close" width={24} height={24} />
      </button>
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiper h-[210px]"
      >
        <SwiperSlide>
          <img src={slider} alt="slider" className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} alt="slider" className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} alt="slider" className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
