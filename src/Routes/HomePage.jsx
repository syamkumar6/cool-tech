import { useEffect } from "react"
import AboutSection from "../Components/Home/AboutSection"
import AppForm from "../Components/Home/AppForm"
import ContactSection from "../Components/Home/ContactSection"
import HomeCarousel from "../Components/Home/HomeCarousel"
import ProductSection from "../Components/Home/ProductSection"
import StatusCard from "../Components/Home/StatusCard"
import WhatsappMsg from "../Components/Home/WhatsappMsg"




function HomePage() {
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main >
    <WhatsappMsg/>
    <HomeCarousel/>
    <AboutSection/>
    <ProductSection/>
    <ContactSection/>
    <StatusCard/>
    <AppForm/>

    </main>
    
  )
}

export default HomePage