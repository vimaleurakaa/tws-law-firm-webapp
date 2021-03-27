import React from "react";
import Navbar from "../../components/Navbar/index";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Wills/index";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/EnquiryForm/EnquiryForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Footer />
      <Form />
    </>
  );
};

export default Home;
