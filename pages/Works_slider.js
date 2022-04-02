import styles from '../styles/Works_slider.module.scss'

export default function Works_slider() {
  return (
    <section className={styles.works_slider_section}>
      <div className={styles.works_slider}>
        <div className={styles.works_slider__items}>
          <div className={styles.works_slider__items__canvas}>
            <img src='/about-image.jpg' alt='work illustration' />
          </div>
          <h3 className={styles.works_slider__items__title}>Self Branding<span className={'white'}> | 2022</span></h3>
          <p className={styles.works_slider__items__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className={styles.works_slider__items}>
          <div className={styles.works_slider__items__canvas}>
            <img src='/about-image.jpg' alt='work illustration' />
          </div>
          <h3 className={styles.works_slider__items__title}>Self Branding<span className={'white'}> | 2022</span></h3>
          <p className={styles.works_slider__items__description}>LLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className={styles.works_slider__items}>
          <div className={styles.works_slider__items__canvas}>
            <img src='/about-image.jpg' alt='work illustration' />
          </div>
          <h3 className={styles.works_slider__items__title}>Self Branding<span className={'white'}> | 2022</span></h3>
          <p className={styles.works_slider__items__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  )
}