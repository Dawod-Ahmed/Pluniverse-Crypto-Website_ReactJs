import {
  Header,
  Hero,
  EarnAdventureSection,
  SpecialFeatures,
  Timelineroadmap,
  Footer,
} from "./components/components";
const App = () => {
  
  const scrolltotop = ()=>{
    window.scrollTo(0,0)

  }



  window.addEventListener("scroll",function(){
    var scroll = document.querySelector('.bottom-to-top-scroll');
    scroll.classList.toggle('active',window.scrollY > 50)
  })


  return (
    <>
 <div className={`bottom-to-top-scroll fw-bold text-center ${window.scrollY > 500 ? "Sactive":""}`} onClick={scrolltotop}>
         ˄ </div>  
      <Header />
      <Hero />
      <div className="light-background-first">
      <EarnAdventureSection />
      <SpecialFeatures />
      </div>
      <Timelineroadmap />
      <Footer />
      {/* */}
    </>
  );
};

export default App;
