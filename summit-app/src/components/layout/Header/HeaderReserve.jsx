import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-scroll'

import styles from "./HeaderReserve.module.css";

export default function HeaderReserve() {
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
              <a href="/"> Home </a>
              <a href="/"> About us </a>
              <a href="/"> Rooms </a>
              <a href="/"> Facilities </a>
              <a href="/reservas"> Reserve </a>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={600}> <a href="contactUs"> Contact us </a> </Link>
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
