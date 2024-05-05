import CardComponent from "../section/components/CardComponent";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Tooltip } from "@mui/material";
import { Box } from "@mui/material";

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
          <SwiperSlide key={ele.id}>
            <Tooltip
              title={`${ele.songs.length} songs`}
              placement="top-start"
              arrow
            >
              <Box>
                <CardComponent
                  title={ele.title}
                  img={ele.image}
                  followers={ele.follows}
                />
              </Box>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
