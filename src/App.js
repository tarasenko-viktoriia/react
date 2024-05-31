import React from 'react';
import './App.css';

const Yoga = () => (
<>
  <header>
    <div className="logo">
      <a href="#">
        <img src="./images/logo.png" alt="Logo" />
      </a>
    </div>
    <nav className="main-nav hamburger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span />
      </label>
      <ul className="menu-box">
        <li>
          <a className="menu-item" href="#">
            About us
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Reservation
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Gallery
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Elements
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Shop
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="banner">
      <div>
        <form>
          <p>Trial class</p>
          <input type="text" placeholder="Enter your name" />
          <input type="tel" placeholder="Enter your phone" />
          <div className="select-container">
            <div id="select-yoga-container" className="select-body">
              <select name="class" id="select-box">
                <option value="">Chose your class</option>
                <option value="Yoga For Health">Yoga For Health</option>
                <option value="Yoga For Lose Weighth">
                  Yoga For Lose Weighth
                </option>
                <option value="Yoga For Children">Yoga For Children</option>
                <option value="Yoga For Elderly">Yoga For Elderly</option>
              </select>
              <div className="icon-container">
                <img
                  src="./images/angle-down-solid.svg"
                  alt="Icon angle down solid"
                />
              </div>
            </div>
          </div>
          <button type="submit">Try it</button>
        </form>
      </div>
      <div className="banner-title">
        <h1>
          Just Balance <br />
          your Mind &amp; Body
        </h1>
        <p>
          Create the healthy living <br />
          for yourself
        </p>
      </div>
    </section>
    <section id="section1">
      <div className="section1-title">
        <h2>Yoga feature program</h2>
        <p>Our Classes</p>
      </div>
      <div className="section1-cards">
        <div className="section1-cards-items">
          <img src="./images/img-01.jpg" alt="Yoga For Health" />
          <div className="section1-cards-items-info">
            <h3>Yoga For Health</h3>
            <p>
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipisicing elit, sed
              do eiusmod tempor incididunt.
            </p>
            <a href="#">Ashtanga - Hatha</a>
          </div>
        </div>
        <div className="section1-cards-items">
          <img src="./images/img-02.jpg" alt="Yoga For Lose Weighth" />
          <div className="section1-cards-items-info">
            <h3>Yoga For Lose Weighth</h3>
            <p>
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipisicing elit, sed
              do eiusmod tempor incididunt.
            </p>
            <a href="#">Ashtanga - Hatha</a>
          </div>
        </div>
        <div className="section1-cards-items">
          <img src="./images/img-03.jpg" alt="Yoga For Children" />
          <div className="section1-cards-items-info">
            <h3>Yoga For Children</h3>
            <p>
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipisicing elit, sed
              do eiusmod tempor incididunt.
            </p>
            <a href="#">Ashtanga - Hatha</a>
          </div>
        </div>
        <div className="section1-cards-items">
          <img src="./images/img-04.jpg" alt="Yoga For Elderly" />
          <div className="section1-cards-items-info">
            <h3>Yoga For Elderly</h3>
            <p>
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipisicing elit, sed
              do eiusmod tempor incididunt.
            </p>
            <a href="#">Ashtanga - Hatha</a>
          </div>
        </div>
      </div>
    </section>
    <section id="section2">
      <a href="#" className="image-link">
        <img src="./images/img-05.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-06.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-07.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-08.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-09.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-10.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-11.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
      <a href="#" className="image-link">
        <img src="./images/img-12.jpg" alt="Image 1" />
        <div className="overlay"></div>
      </a>
    </section>
    <section id="section3">
      <div className="section3-info">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor it in lorei
          voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem
          ispum loting sokui.
        </p>
      </div>
      <div className="slider-container">
        <img
          src="./images/img-13.jpg"
          className="slider-image active"
          alt="Yoga image"
        />
        <img
          src="./images/img-14.jpg"
          className="slider-image"
          alt="Yoga image 2"
        />
        <button className="slider-button prev">
          <img src="./images/chevron-left-solid.svg" alt="Chevron left" />
        </button>
        <button className="slider-button next">
          <img src="./images/chevron-right-solid.svg" alt="Chevron right" />
        </button>
      </div>
    </section>
    <section className="section4-overlay" id="section4">
      <div className="section4-container">
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-01.png" alt="ico-01" />
          </div>
          <h3>Improved overall health</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.{" "}
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-02.png" alt="ico-02" />
          </div>
          <h3>Increased concentration</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.{" "}
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-03.png" alt="ico-03" />
          </div>
          <h3>Balance your mind</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.{" "}
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-04.png" alt="ico-04" />
          </div>
          <h3>Sleap better</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.{" "}
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-05.png" alt="ico-05" />
          </div>
          <h3>Weight loss</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.{" "}
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-06.png" alt="ico-06" />
          </div>
          <h3>Strengthens your bones</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-07.png" alt="ico-07" />
          </div>
          <h3>Increased flexibility</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.i{" "}
          </p>
        </div>
        <div className="section4-card">
          <div>
            <img src="./images/section-4/ico-08.png" alt="ico-08" />
          </div>
          <h3>Lower blood pressure</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com.i{" "}
          </p>
        </div>
      </div>
    </section>
    <section id="section5">
      <div className="section5-card">
        <div className="section5-cards-price">
          {" "}
          <p>
            <span>$ 49</span> / month
          </p>
        </div>
        <div className="section5-cards-info">
          <p>Entry date: Mon-Fri</p>
          <p>Entry time: 8a.m - 8p.m</p>
          <p>Nutrition advicer: no</p>
          <button type="button">Buy now</button>
        </div>
      </div>
      <div className="section5-card">
        <div className="section5-cards-price">
          <p>
            <span>$ 69</span> / month
          </p>
        </div>
        <div className="section5-cards-info">
          <p>Entry date: Mon-Fri</p>
          <p>Entry time: 8a.m - 8p.m</p>
          <p>Nutrition advicer: yes</p>
          <button type="button">Buy now</button>
        </div>
      </div>
      <div className="section5-card">
        <div className="section5-cards-price">
          <p>
            <span>$ 99</span> / month
          </p>
        </div>
        <div className="section5-cards-info">
          <p>Entry date: Mon-Sun</p>
          <p>Entry time: 8a.m - 8p.m</p>
          <p>Nutrition advicer: yes</p>
          <button type="button">Buy now</button>
        </div>
      </div>
    </section>
  </main>
  <footer id="footer">
    <div className="footer-first-path">
      <div className="footer-section1">
        <p>About</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea harum
          maxime repudiandae animi, maiores molestiae eaque tempora consectetur
          a ducimus!
        </p>
      </div>
      <div className="footer-section2">
        <div>
          <p>Contact us</p>
          <ul className="contacts-info">
            <li>
              <img src="./images/icon-1024/location.png" alt="Logo location" />
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#ffffff" }}
              />
              <address>5419 Joseph Montains Art. 716</address>
            </li>
            <li>
              <img src="./images/icon-1024/email.png" alt="Logo email" />
              <i
                className="fa-regular fa-envelope"
                style={{ color: "#ffffff" }}
              />
              <a href="mailto:joga.info.@example.com">joga.info.@example.com</a>
            </li>
            <li>
              <div>
                <img src="./images/icon-1024/phone-call.png" alt="Logo phone" />
                <i className="fa-solid fa-phone" style={{ color: "#ffffff" }} />
                <a href="tel:+123456789">+1 234 567 89</a>
                <br />
                <a href="tel:+123467890">+1 234 678 90</a>
              </div>
            </li>
            <li>
              <img src="./images/icon-1024/worldwide.png" alt="Logo website" />
              <i
                className="fa-brands fa-dribbble"
                style={{ color: "#ffffff" }}
              />
              <a href="www.example.com" target="_blank">
                www.example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-section3">
        <div className="footer-icon-768">
          <a href="https://ua.linkedin.com/" target="_blank">
            <div className="footer-icon">
              <img
                src="./images/icon-768/linkedin-in.svg"
                alt="logo linkedin"
              />
            </div>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <div className="footer-icon">
              <img src="./images/icon-768/twitter.svg" alt="logo twitter" />
            </div>
          </a>
          <a href="https://facebook.com/" target="_blank">
            <img
              width={20}
              src="./images/icon-768/facebook.svg"
              alt="logo facebook"
            />
          </a>
          <a href="https://plus.google.com" target="_blank">
            <img
              width={20}
              src="./images/icon-768/google-plus.svg"
              alt="logo google-plus"
            />
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <img
              width={20}
              src="./images/icon-768/pinterest.svg"
              alt="logo pinterest"
            />
          </a>
        </div>
        <div className="footer-icon-1024">
          <a href="https://www.pinterest.com/" target="_blank">
            <img src="./images/icon-1024/pinterest.png" alt="Logo pinterest" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="./images/icon-1024/twitter.png" alt="Logo twitter" />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <img src="./images/icon-1024/facebook.png" alt="Logo facebook" />
          </a>
          <a href="https://plus.google.com" target="_blank">
            <img
              src="./images/icon-1024/google-plus-logo.png"
              alt="Logo google-plus-logo"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="./images/icon-1024/instagram.png" alt="Logo instagram" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-second-path">
      <p>Copyright © 2016-2017 Yoga Classes</p>
    </div>
  </footer>
</>
)

const App = () => {
    return (
        <div>
           <Yoga/>
        </div>
    );
};

export default App;
