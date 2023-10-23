import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-scroll'
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
          <nav>
            <div
              className={`${styles.nav_container} ${
                scrolled ? styles.sticky : ""
              }`}
            >
              <Link href="/" activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}> Home </Link>
              <Link href="/" activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={600}> About us </Link>
              <Link href="/"  activeClass="active" to="room" spy={true} smooth={true} offset={-120} duration={600}> Rooms </Link>
              <Link href="/"  activeClass="active" to="facilities" spy={true} smooth={true} offset={-200} duration={600}> Facilities </Link>
              <a href="/reservas"> Reserve </a>
              <Link href="/"  activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={600}> Contact us </Link>
            </div>
          </nav>
            <Fade>
              <h1>Summit Hotel Palace</h1>
            </Fade>
      </div>
    </>
  );
}
