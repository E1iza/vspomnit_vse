// import { useState } from 'react'
// import Header from './components/Header.jsx'
import MainPage from './components/MainPage'
import Mission from './components/Mission'
import Directions from "./components/Directions";
import Principles from "./components/Principles.jsx";
import ExperienceList from './components/ExperienceList.jsx';
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";
import ButtonFixed from "./components/UI/ButtonFixed.jsx";

function App() {
  return (
    <>
      <MainPage />
      <ButtonFixed />
      <Mission />
      <Directions />
      <Principles />
      <ExperienceList />
      <Team/>
      <Footer />
    </>
  )
}

export default App
