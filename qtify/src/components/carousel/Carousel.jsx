import CardComponent from "../section/components/CardComponent";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((ele) => (
          <SwiperSlide>
            <CardComponent
              key={ele.id}
              title={ele.title}
              img={ele.image}
              followers={ele.follows}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
