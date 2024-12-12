import { Outlet } from "react-router-dom";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";
import Headroom from 'react-headroom';
import { Toaster } from 'react-hot-toast';

function RootRouter() {

  return (
    <>
      <Headroom>
        <Header/>
      </Headroom>

      <Toaster position="top-center" reverseOrder={false} />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootRouter;
