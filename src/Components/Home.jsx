import React, {useState} from "react"

import "../index.css";
import "./Home.css";
import MenuItem from "./MenuItem";
import Tilt from 'react-parallax-tilt';
import IMG_3901 from "../assets/images/IMG_3901";


const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contacts", label: "Contact" },
]

export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
      <div>
        <header>
          <nav>
            <button onClick={toggleSidebar}>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="injected-svg svg_img"
                    data-src="assets/img/icons/menu.svg"
                    role="img"
                    style={{ width: "30px" }}
                  >
                    <path
                      d="M17.5399 8.30989C18.8986 8.30989 20 7.20851 20 5.84989C20 4.49127 18.8986 3.38989 17.5399 3.38989C16.1813 3.38989 15.08 4.49127 15.08 5.84989C15.08 7.20851 16.1813 8.30989 17.5399 8.30989Z"
                      stroke="#8c6fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.46001 8.30989C7.81863 8.30989 8.92 7.20851 8.92 5.84989C8.92 4.49127 7.81863 3.38989 6.46001 3.38989C5.10139 3.38989 4 4.49127 4 5.84989C4 7.20851 5.10139 8.30989 6.46001 8.30989Z"
                      stroke="#ff6f6f"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5399 20.6099C18.8986 20.6099 20 19.5086 20 18.1499C20 16.7913 18.8986 15.6899 17.5399 15.6899C16.1813 15.6899 15.08 16.7913 15.08 18.1499C15.08 19.5086 16.1813 20.6099 17.5399 20.6099Z"
                      stroke="#ff6f6f"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z"
                      stroke="#ff6f6f"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </nav>
        </header>

        {sidebarVisible && (
          <div className="br-sidebar-overlay">
            <div className="br-sidebar br-open css-1bwerz7">
              <div className="menu-list">
                <a
                  href="index.html"
                  className="close-sidebar"
                  onClick={(e) => {
                    e.preventDefault();
                    setSidebarVisible(false);
                  }}
                >
                  ×
                </a>
                <ul className="navbar-nav mb-2 ml-auto" id="top-menu">
                  {menuItems.map((item) => (
                    <MenuItem key={item.id} {...item} active={activeMenu === item.id} onClick={setActiveMenu} />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <section id="home" className="br-hero margin-b-50">
          <div className="br-text-1">PROFESSIONAL</div>
          <div className="br-text-2">RESUME</div>
          <div className="container margin-b-50">
            <div className="hero-content">
              <div className="hero-item static">
                <div className="br-hero-detail">
                  <h1 className="br-hero-title">
                    <span>
                      My Self,
                      <br />
                      <span className="name">Deepak&nbsp;Simha</span>
                    </span>
                  </h1>
                  <p className="br-hero-detail">
                    I'm a passionate and detail-oriented full stack developer skilled in building responsive web applications using modern technologies
                  </p>
                </div>
                <div className="br-hero-img">

                  <Tilt
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                    className="br-card"
                  >
                    <img src={IMG_3901} alt="deepak simha" />
                  </Tilt>
                </div>
                <div className="br-hero-name">
                  <h3 className="underline">
                    I am an
                    <br />
                    <span>Engineer</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
}