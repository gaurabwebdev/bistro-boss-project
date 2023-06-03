import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import CategorySlider from "../CategorySlider/CategorySlider";
import Banner from "../Banner/Banner";
import MenuSection from "../MenuSection/MenuSection";
import HotlineBanner from "../HotlineBanner/HotlineBanner";
import Recommendation from "../Recommendation/Recommendation";
import CheckoutBanner from "../CheckoutBanner/CheckoutBanner";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Home</title>
      </Helmet>
      <HeroCarousel />
      <CategorySlider />
      <Banner />
      <MenuSection />
      <HotlineBanner />
      <Recommendation />
      <CheckoutBanner />
      <Testimonial />
    </div>
  );
};

export default Home;
