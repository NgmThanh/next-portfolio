import styles from '../styles/Hero.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';
import arrowDown from '@iconify/icons-carbon/arrow-down';

export default function Hero() {

  return (
    <section id='home' className={styles.hero_section}>
      <div className={styles.hero_title__container}>
        <div className={'side-grid-layout'}>
          <span className={'side-title'}>Digital</span>
          <h1 className={'title'}>
            <span>I make</span><br></br><span className={'italic title-colored'}>creative</span><span>&nbsp;design</span>
          </h1>
        </div>

        <a href='#homeContent'>
          <div className={'arrow-button'}>
            <Icon icon={arrowDownRight} />
          </div>
        </a>

        <div className={'bg-title'}>Digital</div>
      </div>

      <div id='homeContent' className={'side-grid-layout border-top'}>
        <span className={'side-title is-sticky'}>Introduction</span>
        <div>
          <div className={styles.hero_description}>
            <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
          </div>
          <div className={styles.hero_image}>
            <div className={styles.hero_image__canvas}>
              <img src='/hero-image.png' alt='hero image' />
            </div>

            <div className={'arrow-icon is-sticky ' + styles.hero_image__icon}>
              <Icon icon={arrowDown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}