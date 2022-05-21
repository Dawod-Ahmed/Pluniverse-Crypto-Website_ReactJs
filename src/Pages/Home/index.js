import {
  Hero,
  EarnAdventureSection,
  SpecialFeatures,
  Timelineroadmap,
} from "./components/components";
import "./index.css";
const Home = () => {
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".bottom-to-top-scroll");
    scroll.classList.toggle("active-scroll", window.scrollY > 250);
  });

  return (
    <>
      <div
        className={`bottom-to-top-scroll d-none fw-bold text-center  
        }`}
        onClick={scrolltotop}
      ></div>

      <Hero />
      <div className="light-background-first">
        <EarnAdventureSection />
        <SpecialFeatures />
      </div>
      <Timelineroadmap />
    </>
  );
};

export default Home;
