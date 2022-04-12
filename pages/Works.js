import styles from '../styles/Works.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';

export default function Works() {
  return (
    <section id='works' className={styles.works_section}>
      <div className={styles.works_title + ' border-top'}>
        <div className={'side-grid-layout'}>
          <span className={'side-title col-2'}>Projects</span>
          <h2 className={'title'}>
            <span>Discover<br></br>my&nbsp;</span><span className={'italic title-colored'}>projects</span>
          </h2>
        </div>

        <a href='#worksContent'>
          <div className={'arrow-button'}>
            <Icon icon={arrowDownRight} />
          </div>
        </a>
        <div className={'bg-title'}>WORKS</div>
      </div>

      <div className={'clearfix'}></div>

      <div id='worksContent' className={styles.works_content + ' border-top'}>
        <div className={'side-grid-layout'}>
          <div className={'side-title is-sticky col-2'}>
            <span>Projects</span>
            <div className={'arrow-icon ' + styles.works_content__icon}>
              <Icon icon={arrowDownRight} />
            </div>
          </div>
        </div>

        <div className={styles.works_grid}>
          <a href='#'>
            <div className={styles.works_grid__item}>
              <div className={styles.works_grid__item__canvas}>
                <img src='/works-assistant.jpg' alt='work illustration' />
              </div>
              <div className={styles.works_grid__item__title}>HD Assistante</div>
              <div className={styles.works_grid__item__description}>Web Design</div>
            </div>
          </a>

          <a href='#'>
            <div className={styles.works_grid__item}>
              <div className={styles.works_grid__item__canvas}>
                <img src='/works-design-1.jpg' alt='work illustration' />
              </div>
              <div className={styles.works_grid__item__title}>HD Assistante</div>
              <div className={styles.works_grid__item__description}>Web Design</div>
            </div>
          </a>

          <a href='#'>
            <div className={styles.works_grid__item}>
              <div className={styles.works_grid__item__canvas}>
                <img src='/works-design-2.jpg' alt='work illustration' />
              </div>
              <div className={styles.works_grid__item__title}>HD Assistante</div>
              <div className={styles.works_grid__item__description}>Web Design</div>
            </div>
          </a>

          <a href='#'>
            <div className={styles.works_grid__item}>
              <div className={styles.works_grid__item__canvas}>
                <img src='/works-real-estate.jpg' alt='work illustration' />
              </div>
              <div className={styles.works_grid__item__title}>HD Assistante</div>
              <div className={styles.works_grid__item__description}>Web Design</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}