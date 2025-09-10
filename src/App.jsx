import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";
import PractitionerDashboard from "./pages/PractitionerDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/Auth" element={<AuthPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        {/* Use the actual PractitionerDashboard component here */}
        <Route
          path="/practitioner-dashboard"
          element={<PractitionerDashboard />}
        />
      </Routes>
    </>
  );
};

export default App;
