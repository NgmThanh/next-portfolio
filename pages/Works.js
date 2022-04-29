import styles from '../styles/Works.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';

export default function Works() {
  return (
    <section id='works' className={styles.works_section + ' mt-200'}>
      <div className={styles.works_background}>
        <div className={styles.works_title}>
          <span className={styles.works_title__subtitle + ' side-subtitle'}>Projects</span>

          <h1 className={'title-primary ml-1'}>
            <span><div className={'line-left'}></div>Discover</span><br></br>
            <span className={'ml-2'}>my</span><span className={'colored'}>&nbsp;projects</span>
          </h1>

          <a href='#worksContent'>
            <div className={'arrow-button'}>
              <Icon icon={arrowDownRight} />
            </div>
          </a>
        </div>
      </div>

      <div className={'clearfix'}></div>

      <div id='worksContent' className={styles.works_content + ' mt-200'}>
        <div>
          <div className={'side-subtitle is-sticky'}>
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