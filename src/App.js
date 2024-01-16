// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './Styles/Navbar.css';
import './Styles/Footer.css'; 
import './Styles/Header.css';
import './Styles/Contact.css'
import './App.css';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

