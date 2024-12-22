import { useEffect, useState } from "react"
import AboutSection from "../Components/Home/AboutSection"
import AppForm from "../Components/Home/AppForm"
import ContactSection from "../Components/Home/ContactSection"
import HomeCarousel from "../Components/Home/HomeCarousel"
import ProductSection from "../Components/Home/ProductSection"
import StatusCard from "../Components/Home/StatusCard"
import WhatsappMsg from "../Components/Home/WhatsappMsg"
import Loader from "../Components/Loader"




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
    
  )
}

export default HomePage
