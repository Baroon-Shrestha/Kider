import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import ClassPage from "./Pages/ClassPage";
import ContactPage from "./Pages/ContactPage";
import Appoint from "./Pages/PageSection/Appoint";
import BeTeach from "./Pages/PageSection/BeTeach";
import FacPage from "./Pages/PageSection/FacPage";
import TecPage from "./Pages/PageSection/TecPage";
import Review from "./Pages/PageSection/Review";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashClass from "./Pages/Dashboard/DashClass";
import DashTeacher from "./Pages/Dashboard/DashTeacher";
import { ClassForm } from "./Components/Forms/ClassForm";
import TeacherForm from "./Components/Forms/TeacherForm";
import AllReview from "./Components/Home Components/AllReview";
import DashboardReview from "./Pages/Dashboard/DashboardReview";
import ReviewForm from "./Components/Forms/ReviewForm";

const App = () => {
  const location = useLocation();
  const isDashboard = [
    "/dashboard",
    "/dashboard-teacher",
    "/dashboard-class",
    "/form",
    "/teach-form",
    "/dashboard-review",
  ].includes(location.pathname);

  return (
    <div>
      {!isDashboard && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<Appoint />} />
        <Route path="/become" element={<BeTeach />} />
        <Route path="/facilities" element={<FacPage />} />
        <Route path="/review" element={<Review />} />
        <Route path="/teacher" element={<TecPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-class" element={<DashClass />} />
        <Route path="/dashboard-teacher" element={<DashTeacher />} />
        <Route path="/form" element={<ClassForm />} />
        <Route path="/teach-form" element={<TeacherForm />} />
        <Route path="/allreview" element={<AllReview />} />
        <Route path="/dashboard-review" element={<DashboardReview />} />
        <Route path="/review-form" element={<ReviewForm />} />
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
