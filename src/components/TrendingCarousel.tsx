import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieData } from "../api/useMovieData";

function TrendingCarousel(){
    const { data } = useMovieData();

    return (
        <>
        <section className="py-4 flex flex-col max-w-[100%] items-start px-[8%]">
        <div className="flex flex-row w-[75%]">
          <h3 className="text-3xl font-black text-black underline">
            Trending movies:
          </h3>
        </div>
      </section>
      <section className="py-8 flex flex-col max-w-[100%] items-center">
        <div className="flex flex-row w-[100%] flex-wrap">
          <Swiper
            spaceBetween={5}
            slidesPerView={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            slideToClickedSlide
            navigation
            loop
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              450: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              660: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 6,
              },
            }}
            // centeredSlides
          >
            {data.results.map((movie, key) => {
              console.log(
                `https://image.tmdb.org/t/p/original${movie.poster_path}`
              );
              return (
                <SwiperSlide key={key}>
                  <div className="">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                      className="w-[300px] h-[400px] object-cover"
                    />
                    <h4 className="text-lg font-light text-center py-2">
                      {movie.title}
                    </h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
        </>
    )
}

export default TrendingCarousel