import React, { useState } from "react";
import {
  Home,
  Calendar,
  Users,
  BarChart2,
  User,
  Bell,
  LogOut,
} from "lucide-react";

const PractitionerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dummy Data
  const stats = [
    { title: "Total Patients", value: 120 },
    { title: "Appointments Today", value: 8 },
    { title: "Completed Sessions", value: 45 },
    { title: "Pending Feedback", value: 12 },
  ];

  const appointments = [
    { patient: "John Doe", time: "10:00 AM", status: "Scheduled" },
    { patient: "Jane Smith", time: "11:30 AM", status: "Completed" },
    { patient: "Alex Johnson", time: "02:00 PM", status: "Cancelled" },
  ];

  const patients = [
    { name: "John Doe", age: 32, lastVisit: "2025-09-05" },
    { name: "Jane Smith", age: 28, lastVisit: "2025-09-07" },
    { name: "Alex Johnson", age: 40, lastVisit: "2025-09-03" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 text-2xl font-bold text-green-800">AyurSutra</div>
        <nav className="flex-1">
          {[
            {
              name: "Dashboard",
              icon: <Home className="w-5 h-5" />,
              key: "dashboard",
            },
            {
              name: "Appointments",
              icon: <Calendar className="w-5 h-5" />,
              key: "appointments",
            },
            {
              name: "Patients",
              icon: <Users className="w-5 h-5" />,
              key: "patients",
            },
            {
              name: "Schedule",
              icon: <Calendar className="w-5 h-5" />,
              key: "schedule",
            },
            {
              name: "Analytics",
              icon: <BarChart2 className="w-5 h-5" />,
              key: "analytics",
            },
            {
              name: "Profile",
              icon: <User className="w-5 h-5" />,
              key: "profile",
            },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-2 w-full px-6 py-3 hover:bg-green-50 ${
                activeTab === item.key ? "bg-green-100 font-semibold" : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {activeTab}
          </h1>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Dr. Patel</span>
            </div>
            <LogOut className="w-5 h-5 text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-green-800">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Appointments Table */}
            <div className="bg-white shadow rounded-xl p-4">
              <h2 className="font-semibold text-green-800 mb-4">
                Today's Appointments
              </h2>
              <table className="w-full text-left">
                <thead className="border-b border-gray-300">
                  <tr>
                    <th className="py-2 px-4">Patient</th>
                    <th className="py-2 px-4">Time</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="py-2 px-4">{a.patient}</td>
                      <td className="py-2 px-4">{a.time}</td>
                      <td className="py-2 px-4">{a.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Patients Table */}
        {activeTab === "patients" && (
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="font-semibold text-green-800 mb-4">Patients</h2>
            <table className="w-full text-left">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Age</th>
                  <th className="py-2 px-4">Last Visit</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-2 px-4">{p.name}</td>
                    <td className="py-2 px-4">{p.age}</td>
                    <td className="py-2 px-4">{p.lastVisit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Other tabs (Schedule, Analytics, Profile) can have placeholders for now */}
        {["schedule", "analytics", "profile"].includes(activeTab) && (
          <div className="bg-white shadow rounded-xl p-6 text-gray-600">
            <p className="text-center py-20 text-lg">
              Content for "{activeTab}" will go here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PractitionerDashboard;
