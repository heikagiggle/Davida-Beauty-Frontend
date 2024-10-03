import hero from "../../assets/hero.png";
import why from "../../assets/why.png";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Contact from "./Contact";
import Why from "./Why";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Welcome to Davida Beauty"
        subtitle="Feel free to explore our shop, we love you and we are happy to have you."
        link="/book"
        image={hero}
      />

      <FeaturedProducts />

      <HeroSection
        title="Want to Learn A Skill?"
        subtitle="Are you style savvy? Do you want to be one of the best and most sort after hairstylist in the world? Come be a professional within 3 months"
        link="https://forms.gle/zZSS74jwK4v5j9hw9"
        image={hero}
      />

      <Why
        title="Why Davida Beauty?"
        image={why}
      />

      <Contact />

    </div>
  );
};

export default HomePage;
