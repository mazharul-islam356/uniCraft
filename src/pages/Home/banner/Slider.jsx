import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import slide01 from "../../../../public/imges/slide01.jpg";
import slide02 from "../../../../public/imges/slide02.jpg";
import slide03 from "../../../../public/imges/slide03.jpg";
import slide04 from "../../../../public/imges/slide04.jpg";
import slide05 from "../../../../public/imges/slide05.jpg";
import slide06 from "../../../../public/imges/slide06.jpg";
import slide07 from "../../../../public/imges/slide07.jpg";
import "./slider.css";

const Slider = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[45em]" src={slide01} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide02} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide03} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide04} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide05} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide06} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide07} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[45em]" src={slide01} />
        </SwiperSlide>
      </Swiper>

      <button className="mb-10 rounded-md btn btn-md btn-outline btn-wide mt-10">
        View recent work
      </button>
    </div>
  );
};

export default Slider;
