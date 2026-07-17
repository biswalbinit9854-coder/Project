import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Pet from "./Pet";
import WhyChooseUs from "./Whychooseus";
import Services from "./Services";
import Patients from "./Patients";
import Testimonials from "./Testimonial";
import Gallery from "./Gallery";
import Care from "./Care";
import FAQ from "./FAQ";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Home />
        <Pet />
        <WhyChooseUs />
        <Services />
        <Patients />
        <Testimonials />
        <Gallery />
        <Care />
        <FAQ />
        <Form />
        <Footer />
      </main>
    </>
  );
}

export default App;