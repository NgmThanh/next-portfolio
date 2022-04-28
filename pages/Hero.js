
import styles from '../styles/Hero.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';
import arrowDown from '@iconify/icons-carbon/arrow-down';

export default function Hero() {

  return (
    <section id='home' className={styles.hero_section}>
      <div className={styles.hero_background}>
        <div className={styles.hero_title__container}>
          <span className={styles.hero_subtitle + ' side-subtitle'}>Portfolio</span>

          <h1 className={'title-primary ml-1'}>
            <span><div className={'line-left'}></div>Creative<br></br></span><span className={'colored ml-2'}>Digital</span><span>&nbsp;Design</span>
          </h1>
          <a href='#homeContent'>
            <div className={'arrow-button'}>
              <Icon icon={arrowDownRight} />
            </div>
          </a>
          <div className={styles.last_updated + ' side-subtitle'}>2022</div>
          <div className={styles.scroll_down}>Scroll Down
            <div className={styles.scroll_down__container}>
              <div className={styles.scroll_down__bar}></div>
            </div>
          </div>
        </div>
      </div>

      <div id='homeContent' className={styles.hero_content + ' mt-200'}>
        <div className={styles.hero_content__canvas + ' col-8'}>
          <img src='/hero-image.png' alt='hero image' />
        </div>
        <h3 className={styles.hero_content__subtitle + ' subtitle col-4 ml-5 mt-200'}>Every great design begins with an even <span className={'colored'}>better story</span></h3>
        <p className={styles.hero_content__text + ' col-3 ml-6 mt-120'}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        <a href='#about'>
          <div className={styles.hero_content__circle + ' col-3 ml-2'}>
            <Icon icon={arrowDown} />
          </div>
        </a>
      </div>
    </section>
  )
}