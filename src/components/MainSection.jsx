import diamond from '../assets/diamond.svg';
import tick from '../assets/tick.svg';
import user from '../assets/User Avatar.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import close from '../assets/close.svg';

function MainSection() {
  return (
    <div className="relative px-4 flex-1 container">
      {/* <button
        className="absolute z-50 top-4 right-4 cursor-pointer"
        onClick={() => window.close()}
      >
        <img src={close} alt="close" width={24} height={24} />
      </button> */}
      <div className="flex pt-[40px] items-center gap-1">
        <img src={diamond} alt="diamond" width={20} height={19} />
        <h1 className="text-[22px] leading-[28px] font-bold">Maqola nomi</h1>
      </div>
      <p className="mt-1 text-[#000000] text-[14px] font-medium leading-[20px]">
        Ushbu maqola Faqat Premium foydalanuvchilar uchun to‘liq ochiladi.
        So‘g‘liq‘ingiz haqida chuqurroq tushunchaga ega bo‘lish va ishonchli
        maslahatlarni olish uchun Premiumga o‘tish qo‘shiling.
      </p>
      <p className="mt-1 text-[#EB2D69] font-semibold text-[14px] leading-[20px]">
        Ko'proq
      </p>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <img src={tick} alt="tick" width={24} height={24} />
          <h2 className="text-[16px] leading-[24px] font-bold">Afzallik</h2>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={tick} alt="tick" width={24} height={24} />
          <h2 className="text-[16px] leading-[24px] font-bold">Afzallik</h2>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-[16px] leading-[24px] font-bold text-center">
          Obunachilar fikrlari
        </h2>

        <Swiper
          loop={true}
          paginationautoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.custom-pagination3',
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper overflow-visible h-full"
        >
          <SwiperSlide>
            <div className="p-3 bg-[#FFF1F3] rounded-[16px]">
              <p className="text-[#000000] text-[14px] leading-[20px]">
                “Maqolalarni o‘qish orqali yangi ko‘ylar va motivatsiya oldim.
                Ular har doim hayotimda muhim rol o‘ynaydi!”
              </p>
              <div className="flex items-center mt-2">
                <img
                  src={user}
                  alt="User"
                  className="w-[24px] h-[24px] rounded-full mr-1"
                />
                <p className="font-semibold text-[16px] leading-[24px]">
                  Aziza Qodirov
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3 bg-[#FFF1F3] rounded-[16px]">
              <p className="text-[#000000] text-[14px] leading-[20px]">
                “Maqolalarni o‘qish orqali yangi ko‘ylar va motivatsiya oldim.
                Ular har doim hayotimda muhim rol o‘ynaydi!”
              </p>
              <div className="flex items-center mt-2">
                <img
                  src={user}
                  alt="User"
                  className="w-[24px] h-[24px] rounded-full mr-1"
                />
                <p className="font-semibold text-[16px] leading-[24px]">
                  Aziza Qodirov
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3 bg-[#FFF1F3] rounded-[16px]">
              <p className="text-[#000000] text-[14px] leading-[20px]">
                “Maqolalarni o‘qish orqali yangi ko‘ylar va motivatsiya oldim.
                Ular har doim hayotimda muhim rol o‘ynaydi!”
              </p>
              <div className="flex items-center mt-2">
                <img
                  src={user}
                  alt="User"
                  className="w-[24px] h-[24px] rounded-full mr-1"
                />
                <p className="font-semibold text-[16px] leading-[24px]">
                  Aziza Qodirov
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="mt-2 flex justify-center items-center">
          <div className="custom-pagination3 custom"></div>
        </div>
      </div>

      <p className="mt-2 text-[#000] font-medium text-[16px] leading-[24px] text-center">
        Siz uchun eng dolzarb mavzuda chuqur tahlil – Premiumda ochiladi
      </p>
    </div>
  );
}

export default MainSection;
