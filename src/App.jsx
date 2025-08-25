// import { useState } from 'react'
// import Header from './components/Header.jsx'
import MainPage from './components/MainPage'
import Mission from './components/Mission'
// import { testData } from './data';

function TestUl({ data }) {
  return (
    <ul>
      {data.map(({ id, title, description }) => (
        <li key={id}>
          <p>
            <strong>{title}</strong>. {description}
          </p>
        </li>
        ))}
    </ul>
  )
}

function App() {
  return (
    <>
      <MainPage />
      <Mission />
    </>
  )
}

export default App
