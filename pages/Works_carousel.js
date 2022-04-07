import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Works_carousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Works_carousel() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
  }

  return (
    <section className={styles.works_carousel_section}>
      <Slider {...settings}>
          <div className={styles.works_carousel__items}>
            <div className={styles.works_carousel__items__canvas}>
              <img src={'/about-image.jpg'} alt='work illustration' />
            </div>
            <h3 className={styles.works_carousel__items__title}>Self Branding</h3>
          </div>

          <div className={styles.works_carousel__items}>
            <div className={styles.works_carousel__items__canvas}>
              <img src={'/about-image.jpg'} alt='work illustration' />
            </div>
            <h3 className={styles.works_carousel__items__title}>Self Branding</h3>
          </div>

          <div className={styles.works_carousel__items}>
            <div className={styles.works_carousel__items__canvas}>
              <img src={'/about-image.jpg'} alt='work illustration' />
            </div>
            <h3 className={styles.works_carousel__items__title}>Self Branding</h3>
          </div>
      </Slider>
    </section>
  )
}