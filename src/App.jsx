
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/doctors' element={<Doctor />}/>
          <Route path='/doctors/:speciality' element={<Doctor />}/>
          <Route path='/Auth' element={<AuthPage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/my-profile' element={<MyProfile />}/>
          <Route path='/my-appointments' element={<MyAppointments />}/>
          <Route path='/appointment/:docId' element={<Appointment />}/>
          
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
