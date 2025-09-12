import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; // add useNavigate
import { AppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { Home } from "lucide-react";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const navigate = useNavigate(); // for back to home

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableslots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableslots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="relative p-4 pt-12">
        {" "}
        {/* added top padding */}
        {/* Back to Home button */}
        <button
          onClick={() => navigate("/home")}
          className="fixed top-4 left-4  cursor-pointer flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition z-50"
        >
          <Home size={16} />
          <span className="text-sm">Back</span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="fixed top-4 right-4 cursor-pointer flex items-center gap-1 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-700 transition z-50"
        >
          <span className="text-sm">Logout</span>
        </button>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree}-{docInfo.speciality}
              </p>
              <button className="border border-primary rounded-full px-2 py-0.5 sm:w-20">
                {docInfo.experience}
              </button>
            </div>

            <div className="">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-900 mt-2 max-w-[700px]">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-900">
              Appointment fee: {currencySymbol}
              {docInfo.fees}
            </p>
          </div>
        </div>
        {/* Booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700"></div>
        <p className="text-gray-900 font-bold">Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
              >
                <p>
                  {item[0] ? daysOfWeek[item[0].datetime.getDay()] : `Idle`}
                </p>
                <p className={`${item[0] ? "" : "!text-red-600 font-bold"}`}>
                  {item[0] ? item[0].datetime.getDate() : `X`}
                </p>
              </div>
            ))}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 cursor-pointer rounded-full ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-900 border border-gray-600"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className="bg-primary text-white text-sm border rounded-full px-8 py-3 mt-9 text-center">
          Book an Appointment
        </button>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
