import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", HandleScroll);

    return () => {
      return window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Fade triggerOnce>
          <nav>
            <div
              className={`${styles.nav_container} ${
                scrolled ? styles.sticky : ""
              }`}
            >
              <Link to="/">
                  Home
                {/* <a className="nav-item" id="home-menu" href="#">
                </a> */}
              </Link>

              <a className="nav-item" id="about-menu" href="#about-us">
                About Us
              </a>
              <a className="nav-item" id="rooms-menu" href="#rooms">
                Rooms
              </a>
              <a
                className="nav-item"
                id="facilities-menu"
                href="#facilities-anchor"
              >
                Facilities
              </a>
              <Link to="/reservation">
                Reserve
              </Link>
              {/* <a className="nav-item" id="reserve-menu" href="#rooms">
              </a> */}
              <a className="nav-item" id="contact-menu" href="#socialMedia">
                Contact us
              </a>
            </div>
          </nav>
        </Fade>
        <Fade>
          <h1>Summit Hotel Palace</h1>
        </Fade>
      </div>
    </>
  );
}
