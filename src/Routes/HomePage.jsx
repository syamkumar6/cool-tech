import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AboutSection from "../Components/Home/AboutSection";
import AppForm from "../Components/Home/AppForm";
import ContactSection from "../Components/Home/ContactSection";
import HomeCarousel from "../Components/Home/HomeCarousel";
import ProductSection from "../Components/Home/ProductSection";
import StatusCard from "../Components/Home/StatusCard";
import WhatsappMsg from "../Components/Home/WhatsappMsg";
import Loader from "../Components/Loader";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main>
      <Helmet>
        <title>Aluminium Fabrication in Coorg, Karnataka | COOL TECH Interior</title>
        <meta
          name="description"
          content="COOL TECH Interior offers premium aluminium fabrication services in Coorg, Karnataka. Contact us for high-quality, custom interior solutions."
        />
        <meta
          name="keywords"
          content="aluminium fabrication, Coorg, COOL TECH Interior, custom interiors, fabrication services"
        />
        <meta name="author" content="COOL TECH Interior" />
        <meta property="og:title" content="Aluminium Fabrication in Coorg, Karnataka | COOL TECH Interior" />
        <meta
          property="og:description"
          content="Premium aluminium fabrication services and interior design in Coorg. Contact COOL TECH Interior for tailored solutions!"
        />
        <meta property="og:image" content="./src/assets/svg/logo.png" />
        <meta property="og:url" content="https://cooltechinterior.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <>
          <WhatsappMsg />
          <HomeCarousel />
          <AboutSection />
          <ProductSection />
          <ContactSection />
          <StatusCard />
          <AppForm />
        </>
      )}
    </main>
  );
}

export default HomePage;

