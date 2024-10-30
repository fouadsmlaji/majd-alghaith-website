import './Header.css';
import image from '/assets/images/logo.png';
import { useState, useRef, useEffect } from 'react';
import { useScrollContext } from './ScrollContext';

export default function Header() {
  const isBlackSectionVisible = useScrollContext();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);
  const [collapseHeight, setCollapseHeight] = useState('0px');

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (collapseRef.current) {
      // Update the height based on the content when expanded
      setCollapseHeight(isCollapsed ? '0px' : `${collapseRef.current.scrollHeight}px`);
    }
  }, [isCollapsed]);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isBlackSectionVisible ? "#000000" : "#ffffff",
        color: isBlackSectionVisible ? "#ffffff" : "#000000",
        boxShadow: isBlackSectionVisible ? "none" : "1px 1px 1px rgb(222, 222, 222)",
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong p-0">
          <div className="container-fluid" style={{ padding: 0 }}>
            <div className="d-flex justify-content-between w-100 align-items-center flexCol">
              <div className="d-flex align-items-center spaceDiv">
                <img
                  src={image}
                  alt="Logo"
                  style={{
                    height: "32px",
                    paddingRight: "10px",
                    filter: isBlackSectionVisible ? "invert(0)" : "invert(1)",
                  }}
                  className="header-logo"
                />
                <a
                  className="navbar-brand"
                  href="#"
                  style={{
                    filter: isBlackSectionVisible ? "invert(1)" : "invert(0)",
                  }}
                >
                  Majd Al Ghaith
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarNavDropdown"
                  aria-expanded={!isCollapsed}
                  aria-label="Toggle navigation"
                  onClick={toggleNavbar}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div
                ref={collapseRef}
                className={`collapse navbar-collapse justify-content-end ${isCollapsed ? '' : 'show'}`}
                id="navbarNavDropdown"
                style={{
                  height: collapseHeight,
                  transition: 'height 0.3s ease',
                }}
              >
                <ul className="navbar-nav gap-lg-4 gap-2">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: isBlackSectionVisible ? "#ffffff" : "#000000",
                      }}
                    >
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: isBlackSectionVisible ? "#ffffff" : "#000000",
                      }}
                    >
                      Our Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: isBlackSectionVisible ? "#ffffff" : "#000000",
                      }}
                    >
                      Feedbacks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn1 mb-2 mb-lg-0"
                      href="#"
                      style={{
                        backgroundColor: isBlackSectionVisible ? "#ffffff" : "#000000",
                        color: isBlackSectionVisible ? "#000000" : "#ffffff",
                      }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
