import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Menu from './Menu'
import Hero from './Hero'
import Text_separator from './Text_separator'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import React, { useEffect } from 'react'
import { gsap } from "gsap";

export default function Home() {

  useEffect(() => {
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
    gsap.set('.follower', { xPercent: -50, yPercent: -50 });

    var cur = document.querySelector('.cursor');
    var follow = document.querySelector('.follower');

    window.addEventListener('mousemove', e => {
      gsap.to(cur, 0.1, { x: e.clientX, y: e.clientY });
      gsap.to(follow, .6, { x: e.clientX, y: e.clientY });
    });

    const SmoothScroll = (import('smoothscroll-for-websites')).default
    console.log(SmoothScroll)
  }, []);

  return (
    <div>
      <Head>
        <title>Minh Thanh - Portfolio</title>
        <meta name="Minh Thanh Portfolio" content="Minh Thanh Personal Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="cursor" className="cursor"></div>
      <div className="follower"></div>

      <Menu />

      <main className={styles.main}>
        <Hero />
        <Text_separator />
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  )
}