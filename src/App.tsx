import { useEffect, useState } from "react";
import "./styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type MovieList = {
  results: Movie[];
};

type Movie = {
  title: string;
  poster_path: string;
  backdrop_path: string;
};

function App() {
  const [data, setData] = useState<MovieList>({ results: [] });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_ACESS_TOKEN,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const randomNums = [
    Math.floor(Math.random() * data.results.length),
    Math.floor(Math.random() * data.results.length),
    Math.floor(Math.random() * data.results.length),
  ];
  const backdrops = data.results.filter((movie, i) => {
    return randomNums.includes(i);
  });

  return (
    <>
      <header className="py-8 flex flex-col max-w-[100%] items-start bg-black px-[7%] m-0">
        <div className="flex flex-row w-[100%] border-b border-white justify-between pb-4">
          <div className="flex flex-rol items-center gap-6">
            <h1 className="text-5xl font-bold text-white">STR34M3B4B3</h1>
            <h2 className="text-white font-light text-lg">
              Hand-picked movies and series for you.
            </h2>
          </div>

          <div className="flex flew-row gap-6 items-center">
            <button className="bg-[#994422] cursor-pointer text-white font-bold text-lg px-4 h-12 rounded-2xl border-2 border-transparent hover:bg-transparent hover:border-[#994422] hover:text-[#994422]">
              Assine agora!
            </button>
            <button className="font-thin text-white hover:font-medium cursor-pointer pb-1 hover:border-b">
              Faça Login
            </button>
          </div>
        </div>
      </header>
      <section className="flex flex-col max-w-[100%] items-start ">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination
          loop
          modules={[Autoplay, Pagination]}
          className="bg-[#33333] w-[100%]"
        >
          <SwiperSlide className="">
            <div className="w-[100%] h-[400px] bg-[#33333] relative p-4">
              <span className="flex flex-row text-3xl font-black  text-white w-[400px] ml-[5%] mt-0 p-4 bg-transparent">
                Filmes premiados e indicados nos melhores festivais!
              </span>
              {backdrops.length > 0 && (
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrops[0].backdrop_path}`}
                  alt=""
                  className="absolute top-0 right-[-20%] z-[-2] object-cover object-right overflow-hidden"
                />
              )}
              <div className="absolute top-0 right-0 z-[-1] h-[100%] w-[100%] bg-linear-to-r from-black from-35% to-transparent to-70%"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100%] h-[400px] bg-[#33333] relative p-4">
              <span className="flex flex-row text-3xl font-black text-white  w-[400px] ml-[5%] mt-0 p-4 bg-transparent">
                Uma biblioteca das séries mais recentes aos blockbusters mais
                antigos!
              </span>
              {backdrops.length > 0 && (
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrops[1].backdrop_path}`}
                  alt=""
                  className="absolute top-0 right-[-20%] z-[-2] object-cover object-right overflow-hidden"
                />
              )}
              <div className="absolute top-0 right-0 z-[-1] h-[100%] w-[100%] bg-linear-to-r from-black from-35% to-transparent to-70%"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100%] h-[400px] bg-[#33333] relative p-4">
              <span className="flex flex-row text-3xl font-black text-white  w-[400px] ml-[5%] mt-0 p-4 bg-transparent">
                Classicos dos maiores estúdios ou produções independentes, a sua
                disposição
              </span>
              {backdrops.length > 0 && (
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrops[2].backdrop_path}`}
                  alt=""
                  className="absolute top-0 right-[-20%] z-[-2] object-cover object-right overflow-hidden"
                />
              )}
              <div className="absolute top-0 right-0 z-[-1] h-[100%] w-[100%] bg-linear-to-r from-black from-35% to-transparent to-70%"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-8 flex flex-col max-w-[100%] items-start ml-[8%] mr-[5%]">
        <form action="" className="flex flex-row items-end w-[100%] gap-6">
          <div className="flex flex-col w-[100%] gap-4">
            <span className="max-w-[300px] text-lg font-medium">
              Inscreva-se agora e tenha acesso a tudo isso por apenas:
            </span>
            <span className=" flex w-[100%] text-5xl font-black text-right">
              R$23,00
            </span>
          </div>

          <div className="flex flex-row w-[100%] gap-1 max-md:flex-col">
            <label htmlFor="email" className="font-bold">
              Seu melhor Email:
            </label>
            <div className="flex flex-row w-[100%] gap-6 max-md:flex-col">
              <input
                type="email"
                name="email"
                id=""
                className="border-b w-[100%]"
              />
              <button type="submit" className="bg-[#38AF4A] p-2 rounded-xl">
                Assine Agora!
              </button>
            </div>
          </div>
        </form>
      </section>
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
      <section className="flex flex-col items-left w-[100%] pb-16">
        <div className="flex flex-col w-[75%] mb-12 mx-[8%] gap-6">
          <h3 className="text-3xl font-black text-black underline">
            Escolha seu plano:
          </h3>
          <p className="w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            distinctio accusantium eaque veniam, veritatis quam eligendi
            voluptatibus provident! Sequi earum, voluptas aliquid maiores
            explicabo reprehenderit nihil fugiat perspiciatis commodi qui!
          </p>
        </div>
        <div className="flex flex-row w-[100%] justify-between gap-8 px-[12%]">
          <div className="bg-[#999999] w-[400px] h-[500px] rounded-3xl"></div>
          <div className="bg-[#999999] w-[400px] h-[500px] rounded-3xl"></div>
          <div className="bg-[#999999] w-[400px] h-[500px] rounded-3xl"></div>
        </div>
      </section>
      <section className="flex flex-col items-left w-[100%] y">
        <div className="flex flex-col w-[75%] mb-12 mx-[8%] gap-6">
          <h3 className="text-3xl font-black text-black underline">
            Perguntas frequentes
          </h3>
        </div>
        <div className="flex flex-col w-[75%] mb-12 mx-[8%] gap-6 h-[80px] bg-[#999999]">

        </div>
      </section>
    </>
  );
}

export default App;
