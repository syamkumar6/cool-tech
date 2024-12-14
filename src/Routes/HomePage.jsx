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
    // Simulate loading time or wait for page content to load
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after content is loaded
    }, 5000); // Set your desired delay here (in milliseconds)

    // Cleanup the timer if the component is unmounted
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
        <Loader /> // Show loader if the page is still loading
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
