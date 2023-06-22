import styles from "./style";
import { Business, CTA, Footer, Navbar, Stats, Testimonials, Hero, HeroTwo, HeroThree, HeroFour, HeroFive, HeroSix,  } from "./components";
import HeroSeven from "./components/HeroSeven";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <HeroTwo />
        <HeroThree />
        <HeroFour />
        <HeroFive />
        <HeroSix />
        <HeroSeven />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <br></br>
        <Business />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
