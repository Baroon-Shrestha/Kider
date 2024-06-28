import React from "react";
import Extra from "../Components/Home Components/Extra";
import Classes from "../Components/Home Components/Classes";
import Appointment from "../Components/Home Components/Appointment";
import Testimonials from "../Components/Home Components/Testimonials";

export default function ClassPage() {
  return (
    <>
      <Extra title="Classes" description="Classes" />
      <Classes />
      <Appointment />
      <Testimonials />
    </>
  );
}
