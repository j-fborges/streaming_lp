import "./styles/main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Header from "./components/Header";
import BackdropCarousel from "./components/BackdropCarousel";
import RegisterForm from "./components/RegisterForm";
import TrendingCarousel from "./components/TrendingCarousel";
import ChoosePlan from "./components/ChoosePlan";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Header />
      <BackdropCarousel />
      <RegisterForm />
      <TrendingCarousel />
      <ChoosePlan />
      <FAQ/>
      <RegisterForm />
    </>
  );
}

export default App;
