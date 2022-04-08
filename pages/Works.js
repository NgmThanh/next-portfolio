import styles from '../styles/Works.module.scss'

export default function Works() {
  return (
    <section id="works" className={styles.works_section}>
      <div className={styles.works_title + ' border-top'}>
        <div className={'side-grid-layout'}>
          <span className={'side-title'}>Projects</span>
          <h2 className={'title'}>
            <span>Discover<br></br>my&nbsp;</span><span className={'italic title-colored'}>projects</span>
          </h2>
        </div>

        <div className={'bg-title'}>WORKS</div>
      </div>

      <div className={'border-top'}></div>
      <div className={'clearfix'}></div>

      <div className={styles.works_content}>
        <div className={'side-grid-layout'}>
          <span className={'side-title'}>Projects</span>
        </div>

        <div className={styles.works_grid}>
          <div className={styles.works_grid__item}>
            <div className={styles.works_grid__item__canvas}>
              <img src='/about-image.jpg' alt='about image' />
            </div>
            <div className={styles.works_grid__item__title}>HD Assistante</div>
            <div className={styles.works_grid__item__description}>Web Design</div>
          </div>

          <div className={styles.works_grid__item}>
            <div className={styles.works_grid__item__canvas}>
              <img src='/about-image.jpg' alt='about image' />
            </div>
            <div className={styles.works_grid__item__title}>HD Assistante</div>
            <div className={styles.works_grid__item__description}>Web Design</div>
          </div>

          <div className={styles.works_grid__item}>
            <div className={styles.works_grid__item__canvas}>
              <img src='/about-image.jpg' alt='about image' />
            </div>
            <div className={styles.works_grid__item__title}>HD Assistante</div>
            <div className={styles.works_grid__item__description}>Web Design</div>
          </div>

          <div className={styles.works_grid__item}>
            <div className={styles.works_grid__item__canvas}>
              <img src='/about-image.jpg' alt='about image' />
            </div>
            <div className={styles.works_grid__item__title}>HD Assistante</div>
            <div className={styles.works_grid__item__description}>Web Design</div>
          </div>
        </div>
      </div>
    </section>
  )
}