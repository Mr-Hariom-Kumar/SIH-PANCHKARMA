import React, { useState, useMemo } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Home,
  Calendar as CalendarIcon,
  Users,
  BarChart2,
  User,
  Bell,
  LogOut,
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

/**
 * PractitionerDashboard.jsx
 * - Single-file dashboard with Dashboard, Appointments, Patients, Schedule, Analytics, Profile
 * - Uses ReactCalendar + Recharts
 * - All dummy data uses Indian names (10 patients)
 */

const PractitionerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // ---------- Dummy Stats ----------
  const stats = [
    { title: "Total Patients", value: 120 },
    { title: "Appointments Today", value: 8 },
    { title: "Completed Sessions", value: 45 },
    { title: "Pending Feedback", value: 12 },
  ];

  // ---------- Dummy Appointments ----------
  const appointments = [
    {
      patient: "Aarav Sharma",
      date: "2025-09-13",
      time: "09:30 AM",
      status: "Confirmed",
    },
    {
      patient: "Priya Mehta",
      date: "2025-09-15",
      time: "10:00 AM",
      status: "Scheduled",
    },
    {
      patient: "Kabir Singh",
      date: "2025-09-15",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      patient: "Ishita Patel",
      date: "2025-09-16",
      time: "02:00 PM",
      status: "Cancelled",
    },
    {
      patient: "Rohan Das",
      date: "2025-09-17",
      time: "03:00 PM",
      status: "Scheduled",
    },
    {
      patient: "Ananya Iyer",
      date: "2025-09-18",
      time: "01:00 PM",
      status: "Confirmed",
    },
    {
      patient: "Devansh Nair",
      date: "2025-09-19",
      time: "04:30 PM",
      status: "Pending",
    },
    {
      patient: "Sneha Kulkarni",
      date: "2025-09-20",
      time: "10:15 AM",
      status: "Scheduled",
    },
    {
      patient: "Aditya Verma",
      date: "2025-09-21",
      time: "12:00 PM",
      status: "Confirmed",
    },
    {
      patient: "Sanya Kapoor",
      date: "2025-09-22",
      time: "09:45 AM",
      status: "Completed",
    },
  ];

  // ---------- Dummy Patients (10 Indian names) ----------
  const patients = [
    { name: "Aarav Sharma", age: 32, lastVisit: "2025-09-05" },
    { name: "Priya Mehta", age: 28, lastVisit: "2025-09-07" },
    { name: "Kabir Singh", age: 40, lastVisit: "2025-09-03" },
    { name: "Ishita Patel", age: 35, lastVisit: "2025-09-09" },
    { name: "Rohan Das", age: 30, lastVisit: "2025-09-10" },
    { name: "Ananya Iyer", age: 27, lastVisit: "2025-09-01" },
    { name: "Devansh Nair", age: 45, lastVisit: "2025-09-02" },
    { name: "Sneha Kulkarni", age: 31, lastVisit: "2025-09-06" },
    { name: "Aditya Verma", age: 29, lastVisit: "2025-09-04" },
    { name: "Sanya Kapoor", age: 33, lastVisit: "2025-09-08" },
  ];

  // ---------- Dummy Analytics (10 patients, 4 weeks each) ----------
  const patientAnalytics = {
    "Aarav Sharma": [
      { week: "Week 1", sessions: 3, satisfaction: 82 },
      { week: "Week 2", sessions: 2, satisfaction: 87 },
      { week: "Week 3", sessions: 3, satisfaction: 91 },
      { week: "Week 4", sessions: 1, satisfaction: 75 },
    ],
    "Priya Mehta": [
      { week: "Week 1", sessions: 2, satisfaction: 90 },
      { week: "Week 2", sessions: 3, satisfaction: 94 },
      { week: "Week 3", sessions: 3, satisfaction: 89 },
      { week: "Week 4", sessions: 2, satisfaction: 95 },
    ],
    "Kabir Singh": [
      { week: "Week 1", sessions: 1, satisfaction: 78 },
      { week: "Week 2", sessions: 2, satisfaction: 65 },
      { week: "Week 3", sessions: 3, satisfaction: 70 },
      { week: "Week 4", sessions: 2, satisfaction: 72 },
    ],
    "Ishita Patel": [
      { week: "Week 1", sessions: 3, satisfaction: 85 },
      { week: "Week 2", sessions: 3, satisfaction: 90 },
      { week: "Week 3", sessions: 2, satisfaction: 88 },
      { week: "Week 4", sessions: 3, satisfaction: 92 },
    ],
    "Rohan Das": [
      { week: "Week 1", sessions: 2, satisfaction: 83 },
      { week: "Week 2", sessions: 2, satisfaction: 77 },
      { week: "Week 3", sessions: 1, satisfaction: 70 },
      { week: "Week 4", sessions: 2, satisfaction: 80 },
    ],
    "Ananya Iyer": [
      { week: "Week 1", sessions: 1, satisfaction: 95 },
      { week: "Week 2", sessions: 3, satisfaction: 96 },
      { week: "Week 3", sessions: 2, satisfaction: 92 },
      { week: "Week 4", sessions: 3, satisfaction: 94 },
    ],
    "Devansh Nair": [
      { week: "Week 1", sessions: 2, satisfaction: 70 },
      { week: "Week 2", sessions: 1, satisfaction: 65 },
      { week: "Week 3", sessions: 3, satisfaction: 75 },
      { week: "Week 4", sessions: 3, satisfaction: 78 },
    ],
    "Sneha Kulkarni": [
      { week: "Week 1", sessions: 3, satisfaction: 85 },
      { week: "Week 2", sessions: 3, satisfaction: 87 },
      { week: "Week 3", sessions: 3, satisfaction: 88 },
      { week: "Week 4", sessions: 2, satisfaction: 89 },
    ],
    "Aditya Verma": [
      { week: "Week 1", sessions: 2, satisfaction: 82 },
      { week: "Week 2", sessions: 1, satisfaction: 80 },
      { week: "Week 3", sessions: 2, satisfaction: 84 },
      { week: "Week 4", sessions: 3, satisfaction: 86 },
    ],
    "Sanya Kapoor": [
      { week: "Week 1", sessions: 3, satisfaction: 90 },
      { week: "Week 2", sessions: 3, satisfaction: 88 },
      { week: "Week 3", sessions: 2, satisfaction: 91 },
      { week: "Week 4", sessions: 3, satisfaction: 93 },
    ],
  };

  // ---------- Weekly Schedule (bar chart) ----------
  const weeklySchedule = [
    { day: "Mon", slots: 5 },
    { day: "Tue", slots: 3 },
    { day: "Wed", slots: 6 },
    { day: "Thu", slots: 2 },
    { day: "Fri", slots: 4 },
    { day: "Sat", slots: 1 },
  ];

  // ---------- Doctor Profile ----------
  const userProfile = {
    name: "Dr. Anil Kumar",
    specialization: "Panchakarma & Ayurvedic Therapy",
    email: "dr.anil@ayursutra.com",
    phone: "+91 98765 43210",
    experience: "12 years",
    location: "Kolkata, India",
  };

  // ---------- Helpers ----------
  const isSameDay = (dateA, dateB) =>
    new Date(dateA).toDateString() === new Date(dateB).toDateString();

  const today = new Date();

  // upcoming appointments (from today onwards), sorted by date/time
  const upcomingAppointments = useMemo(() => {
    return appointments
      .map((a) => ({ ...a, dateObj: new Date(a.date) }))
      .filter((a) => a.dateObj >= new Date(today.setHours(0, 0, 0, 0)))
      .sort((x, y) => x.dateObj - y.dateObj)
      .slice(0, 6);
  }, [appointments]);

  // appointments for the selected date (calendar)
  const appointmentsForSelectedDate = useMemo(() => {
    return appointments.filter((a) => isSameDay(a.date, selectedDate));
  }, [appointments, selectedDate]);

  // show patients list (click to view analytics)
  const handlePatientClick = (name) => {
    setSelectedPatient(name);
    setActiveTab("analytics");
    // scroll to top (optional)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 text-2xl font-bold text-green-800">AyurSutra</div>
        <nav className="flex-1">
          {[
            { name: "Dashboard", icon: <Home />, key: "dashboard" },
            {
              name: "Appointments",
              icon: <CalendarIcon />,
              key: "appointments",
            },
            { name: "Patients", icon: <Users />, key: "patients" },
            { name: "Schedule", icon: <CalendarIcon />, key: "schedule" },
            { name: "Analytics", icon: <BarChart2 />, key: "analytics" },
            { name: "Profile", icon: <User />, key: "profile" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                setSelectedPatient(null);
              }}
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
              <span className="text-gray-700 font-medium">
                {userProfile.name}
              </span>
            </div>
            <LogOut className="w-5 h-5 text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* ---------------- Dashboard ---------------- */}
        {activeTab === "dashboard" && (
          <>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white shadow rounded-xl p-4">
                <h2 className="font-semibold text-green-800 mb-4">
                  Upcoming Appointments
                </h2>
                {upcomingAppointments.length === 0 ? (
                  <p className="text-gray-600">No upcoming appointments.</p>
                ) : (
                  upcomingAppointments.map((a, i) => (
                    <div
                      key={i}
                      className="py-3 border-b last:border-none flex justify-between"
                    >
                      <div>
                        <p className="font-semibold">{a.patient}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(a.date).toDateString()} • {a.time}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          a.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : a.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {a.status}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="bg-white shadow rounded-xl p-4">
                <h2 className="font-semibold text-green-800 mb-4">
                  Quick Calendar
                </h2>
                <ReactCalendar
                  value={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                  }}
                />
                <p className="text-sm text-gray-600 mt-3">
                  Click a date to view appointments for that day.
                </p>
              </div>
            </div>
          </>
        )}

        {/* ---------------- Appointments ---------------- */}
        {activeTab === "appointments" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Appointments</h2>

              {/* show filtered by selected date; if none for that date, show all */}
              {appointmentsForSelectedDate.length > 0 ? (
                appointmentsForSelectedDate.map((appt, i) => (
                  <div
                    key={i}
                    className="border-b last:border-none py-3 flex justify-between items-start"
                  >
                    <div>
                      <p className="font-semibold">{appt.patient}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(appt.date).toDateString()} • {appt.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium block mb-2 ${
                          appt.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : appt.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {appt.status}
                      </span>
                      <div className="flex gap-2 justify-end">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                          Reschedule
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {appointments.map((appt, i) => (
                    <div
                      key={i}
                      className="border-b last:border-none py-3 flex justify-between items-start"
                    >
                      <div>
                        <p className="font-semibold">{appt.patient}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(appt.date).toDateString()} • {appt.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium block mb-2 ${
                            appt.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : appt.status === "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {appt.status}
                        </span>
                        <div className="flex gap-2 justify-end">
                          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                            Reschedule
                          </button>
                          <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Calendar</h2>
              <ReactCalendar value={selectedDate} onChange={setSelectedDate} />
              <p className="text-gray-600 mt-3">
                Appointments on <strong>{selectedDate.toDateString()}</strong>:
              </p>
              <div className="mt-3">
                {appointmentsForSelectedDate.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No appointments on this date.
                  </p>
                ) : (
                  appointmentsForSelectedDate.map((a, i) => (
                    <div key={i} className="py-2 border-b last:border-none">
                      <p className="font-medium">{a.patient}</p>
                      <p className="text-sm text-gray-600">
                        {a.time} — {a.status}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Schedule ---------------- */}
        {activeTab === "schedule" && (
          <div className="bg-white p-6 shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklySchedule}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="slots" fill="#16a34a" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Green bars show number of appointment slots booked per day.
            </p>
          </div>
        )}

        {/* ---------------- Patients ---------------- */}
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
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-green-50 cursor-pointer"
                    onClick={() => handlePatientClick(p.name)}
                  >
                    <td className="py-2 px-4">{p.name}</td>
                    <td className="py-2 px-4">{p.age}</td>
                    <td className="py-2 px-4">{p.lastVisit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-3">
              Click a patient row to view analytics.
            </p>
          </div>
        )}

        {/* ---------------- Analytics ---------------- */}
        {activeTab === "analytics" && (
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="font-semibold text-green-800 mb-4">
              Patient Analytics
            </h2>

            {!selectedPatient ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(patientAnalytics).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedPatient(name)}
                    className="bg-green-50 p-4 rounded-lg shadow hover:bg-green-100 text-left"
                  >
                    <p className="text-lg font-semibold text-green-800">
                      {name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Click to view 4-week progress
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <button
                  className="text-sm text-blue-600 mb-4"
                  onClick={() => setSelectedPatient(null)}
                >
                  ← Back to list
                </button>

                <h3 className="text-xl font-semibold mb-4">
                  {selectedPatient}'s 4-Week Progress
                </h3>

                <div className="mb-4">
                  <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={patientAnalytics[selectedPatient]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="#16a34a"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="satisfaction"
                        stroke="#3b82f6"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold">Weekly Data</h4>
                    <table className="mt-2 w-full text-left text-sm">
                      <thead>
                        <tr>
                          <th className="py-1 px-2">Week</th>
                          <th className="py-1 px-2">Sessions</th>
                          <th className="py-1 px-2">Satisfaction</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientAnalytics[selectedPatient].map((w, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="py-1 px-2">{w.week}</td>
                            <td className="py-1 px-2">{w.sessions}</td>
                            <td className="py-1 px-2">{w.satisfaction}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold">Summary</h4>
                    {(() => {
                      const totalSessions = patientAnalytics[
                        selectedPatient
                      ].reduce((s, x) => s + x.sessions, 0);
                      const avgSatisfaction = Math.round(
                        patientAnalytics[selectedPatient].reduce(
                          (s, x) => s + x.satisfaction,
                          0
                        ) / patientAnalytics[selectedPatient].length
                      );
                      return (
                        <div className="mt-2 space-y-2 text-sm">
                          <p>
                            <strong>Total sessions (4 weeks):</strong>{" "}
                            {totalSessions}
                          </p>
                          <p>
                            <strong>Average satisfaction:</strong>{" "}
                            {avgSatisfaction}%
                          </p>
                          <p className="text-gray-600">
                            Click Back to view other patients.
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- Profile ---------------- */}
        {activeTab === "profile" && (
          <div className="bg-white p-6 rounded-xl shadow space-y-3">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              My Profile
            </h2>
            <p>
              <strong>Name:</strong> {userProfile.name}
            </p>
            <p>
              <strong>Specialization:</strong> {userProfile.specialization}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
              <strong>Phone:</strong> {userProfile.phone}
            </p>
            <p>
              <strong>Experience:</strong> {userProfile.experience}
            </p>
            <p>
              <strong>Location:</strong> {userProfile.location}
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PractitionerDashboard;
