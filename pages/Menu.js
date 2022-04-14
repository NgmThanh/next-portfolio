import styles from '../styles/Menu.module.scss'
import React, { useEffect } from "react";

export default function Menu() {

  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up or is on bottom of page, show the navbar */
    let prevScrollpos = window.pageYOffset;
    const menu = document.getElementById("menu");

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos || window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1) {
      // if (prevScrollpos > currentScrollPos) {
        menu.style.top = "0";
      } else {
        menu.style.top = "-117px";
      }

      prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    <div id={'menu'} className={styles.menu}>
      <div className={styles.menu__inner}>
        <div><span>M</span><span className={'italic title-colored'}>Thanh</span></div>
        <ul>
          <li><a href={'#home'}>Home</a></li>
          <li><a id="aboutButton" href={'#about'}>About</a></li>
          <li><a id="projectButton" href={'#works'}>Projects</a></li>
          <li><a id="contactButton" href={'#contact'}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}