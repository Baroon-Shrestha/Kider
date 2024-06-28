import React from "react";
import Hero from "../Components/Home Components/Hero";
import Extra from "../Components/Home Components/Extra";
import About from "../Components/Home Components/About";
import Become from "../Components/Home Components/Become";
import AllTeach from "../Components/Pages Components/AllTeach";

export default function AboutPage() {
  return (
    <>
      <div>
        <Extra title="About Us" description="AboutUs" />
        <About />
        <Become />
        <AllTeach />
      </div>
    </>
  );
}
