import hero from "../../assets/hero.png";
import two from "../../assets/hero-two.png";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Welcome to Davida Beauty"
        subtitle="Feel free to explore our shop, we love you and we are happy to have you."
        link="/product/65a403e462d14cbea478df7f"
        image={hero}
      />

      <FeaturedProducts />

      <HeroSection
        title="Want to Learn A Skill?"
        subtitle="Are you style savvy? Do you want to be one of the best and most sort after hairstylist in the world? Come be a professional within 3 months"
        link="/"
        image={two}
      />

      <Contact />

      <Footer />
    </div>
  );
};

export default HomePage;
