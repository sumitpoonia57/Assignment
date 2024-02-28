// App.js

import React from 'react';
import Footer from './Footer';
import './App.css';

import logo from './Assets/logo.png';
import trophy from './Assets/trophy.png';
import award from './Assets/award.png';
import pump1 from './Assets/pump1.png';

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="C.R.I. Fluid Systems" />
      </header>

      <main>
        <div className="award-section">
          <div className = "award1">
            <img className = "trophy" src={trophy} alt="Trophy" />
          </div>
          <div className = "award2">
            <h1>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
            </h1>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
              </li>
            </ul>

            <img className = "award" src={award} alt="Award" />
            <p className = "GOV">Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>

        <div className="text-section">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        </div>

        <div className="products-section">
          {/* Add your product images here */}
          <div className="product-img">
            <img src={pump1} alt="Pump1" />
          </div>
          <div className="product-text">
              <p>Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            </div>
            <div className="red-line"></div> 
          {/* Add more product images as needed */}
        </div>
        <div className="footer-text">
        <h3>
                           C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENT
            </h3>
        CHEMICALS & PROCESS <span className="red"> | </span>POWER WATER & WASTE WATER<span className="red"> | </span> OILS & GAS <span className="red"> | </span>PHARMA <span className="red"> | </span> SUGARS & DISTILLERIES <span className="red"> | </span> PAPER & PULP <span className="red"> | </span> MARINE  & DEFENCE <span className="red"> | </span> METAL  & MINING <span className="red"> | </span> FOOD & BEVERAGE <span className="red"> | </span> PETROCHEMICAL & REFINERIES <span className="red"> | </span> SOLAR  <span className="red"> | </span>BUILDING <span className="red"> | </span> HVAC  <span className="red"> | </span>FIRE FIGHTING  <span className="red"> | </span>AGRICULTURE & RESIDENTIAL
      </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;