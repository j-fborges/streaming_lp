import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Autoplay, Controller, Mousewheel, Pagination } from "swiper/modules";
import { useMovieData } from "../api/useMovieData";
import { useState } from "react";

function BackdropCarousel() {
  const { backdrops } = useMovieData();
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="flex flex-col max-w-[100%] items-start relative">
      <div className="absolute h-[400px] w-[100%] z-5">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          direction={"vertical"}
          modules={[Autoplay, Pagination, Controller, Mousewheel]}
          mousewheel
          pagination
          controller={{ control: controlledSwiper }}
          className="h-[400px]"
          preventClicks
          preventInteractionOnTransition
          preventClicksPropagation
        >
          <SwiperSlide className="">
            <div className="w-[100%] p-4">
              <span className="flex flex-row text-3xl font-black  text-white w-[400px] ml-[5%] mt-0 p-4 bg-transparent">
                Filmes premiados e indicados nos melhores festivais!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100%] p-4">
              <span className="flex flex-row text-3xl font-black  text-white w-[400px] ml-[5%] mt-0 p-4 bg-transparent">
                Uma biblioteca das séries mais recentes aos blockbusters mais
                antigos!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100%] p-4">
              <span className="flex flex-row text-3xl font-black  text-white w-[400px] ml-[5%] mt-0 p-4 bg-transparent">
                Classicos dos maiores estúdios ou produções independentes, a sua
                disposição
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        direction={"vertical"}
        modules={[ Controller]}
        onSwiper={setControlledSwiper}
        className="w-[100%] h-[400px]"
      >
        <SwiperSlide className="">
          <div className="w-[100%]">
            {backdrops.length > 0 && backdrops[0] && (
              <img
                src={`https://image.tmdb.org/t/p/original${backdrops[0].backdrop_path}`}
                alt=""
                className="absolute top-0 right-[-20%] z-[-2] object-cover object-right overflow-hidden"
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-[100%]">
            {backdrops.length > 0 && backdrops[1] &&(
              <img
                src={`https://image.tmdb.org/t/p/original${backdrops[1].backdrop_path}`}
                alt=""
                className="absolute top-0 right-[-20%] z-[-2] object-cover object-right overflow-hidden"
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-[100%]">
            {backdrops.length > 0 && backdrops[2] && (
              <img
                src={`https://image.tmdb.org/t/p/original${backdrops[2].backdrop_path}`}
                alt=""
                className="absolute top-0 right-[-20%] z-[-2] object-cover object-right overflow-hidden"
              />
            )}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 right-0 z-[4] h-[400px] w-[100%] bg-linear-to-r from-black from-35% to-transparent to-70%"></div>
    </section>
  );
}

export default BackdropCarousel;
