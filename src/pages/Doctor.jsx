import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { speciality } = useParams();
  console.log(speciality);
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the docotrs specialist. </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 className={sm:}">
        <div>
          <p
            onClick={() =>
              speciality === "vamana"
                ? navigate("/doctors")
                : navigate("/doctors/vamana")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded hover:translate-y-[-3px] transition-all duration-300 cursor-pointer mt-1 hover:bg-primary hover:text-white`}
          >
            Vamana
          </p>
          <p
            onClick={() =>
              speciality === "virechana"
                ? navigate("/doctors")
                : navigate("/doctors/virechana")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded hover:translate-y-[-3px] transition-all duration-500 cursor-pointer mt-1 hover:bg-primary hover:text-white`}
          >
            Virechana
          </p>
          <p
            onClick={() =>
              speciality === "basti"
                ? navigate("/doctors")
                : navigate("/doctors/basti")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded hover:translate-y-[-3px] transition-all duration-500 cursor-pointer mt-1 hover:bg-primary hover:text-white`}
          >
            Basti
          </p>
          <p
            onClick={() =>
              speciality === "nasya"
                ? navigate("/doctors")
                : navigate("/doctors/nasya")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded hover:translate-y-[-3px] transition-all duration-500 cursor-pointer mt-1 hover:bg-primary hover:text-white`}
          >
            Nasya
          </p>
          <p
            onClick={() =>
              speciality === "Raktamokshana"
                ? navigate("/doctors")
                : navigate("/doctors/Raktamokshana")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded hover:translate-y-[-3px] transition-all duration-500 cursor-pointer mt-1 hover:bg-primary hover:text-white`}
          >
            Raktamokshana
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenter"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenter")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded hover:translate-y-[-3px] transition-all duration-500 cursor-pointer mt-1 hover:bg-primary hover:text-white`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid  [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translate-all duration-500"
            >
              <img className="bg-blue-50 " src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
