import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div>
      <header>
        <h1>KALRAVAM</h1>
        <nav><a href='#home'>Home</a> | <a href="#about">About</a> | <a href="#schedule">Schedule</a> | <a href="#contact"></a></nav>
      </header>

      <section id='about'>
          <h2>Event Details</h2>
          <p>This festival program is condected on the behalf of the YSET commite in celebration of the upcomming culturals Day, the theme of this program will traditional and we are going to have some main programs such as pookalam copitition and owr cheif juest Adnan  </p>
      </section>

      <section>
        <h2>Scheduled sections</h2>
        <ol>
          <li>10:00am - opening ceremony</li>
          <li>11:00am - opening speach from Adnan</li>
          <li>12:00 - 1:30 indoor compitions</li>
        </ol>
      </section>

      <footer>
        <p>Orginizers name: muhammed and  adhil.P</p>
        <p>contact: 1916411615</p>
        <p>email: asdf@gmail.com</p>
      </footer>
    </div>
  )
}

export default App
