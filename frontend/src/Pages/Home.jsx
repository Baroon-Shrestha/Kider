import React from "react";
import Appointment from "../Components/Home Components/Appointment";
import Become from "../Components/Home Components/Become";
import Classes from "../Components/Home Components/Classes";
import Facilities from "../Components/Home Components/Facilities";
import Hero from "../Components/Home Components/Hero";
import PopTeachers from "../Components/Home Components/PopTeachers";
import Testimonials from "../Components/Home Components/Testimonials";
import NewClass from "../Components/Home Components/NewClass";
import About from "../Components/Home Components/About";

export default function Home() {
  return (
    <>
      <Hero
        title="the best kindergarden school <br/> for your child"
        description="Empowering Every Child with Knowledge, Creativity, and Confidence
      for a Brighter Tomorrow!"
        height="100%"
      />
      <Facilities />
      <About />
      <Become />
      <NewClass />
      <Classes />
      <Appointment />
      <PopTeachers />
      <Testimonials />
    </>
  );
}
