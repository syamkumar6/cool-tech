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
    // Check if it's the first visit or a refresh
    const isFirstVisit = sessionStorage.getItem("firstVisit");

    if (isFirstVisit) {
      setLoading(false); // If not first visit, hide loader immediately
    } else {
      // If it's the first visit, show loader for 5 seconds
      const timer = setTimeout(() => {
        setLoading(false); // Hide loader after 5 seconds
        sessionStorage.setItem("firstVisit", "true"); // Mark as not first visit
      }, 5000); // Set your desired delay here (in milliseconds)

      // Cleanup the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
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