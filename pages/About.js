import styles from '../styles/About.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';

export default function About() {
  return (
    <section id='about' className={styles.about_section}>
      <div className={styles.about_title + ' border-top'}>
        <div className={'side-grid-layout'}>
          <span className={'side-title'}>Explore</span>
          <h2 className={'title'}>
            <span>About&nbsp;</span><span className={'italic title-colored'}>me</span>
          </h2>
        </div>

        <a href='#aboutContent'>
          <div className={'arrow-button'}>
            <Icon icon={arrowDownRight} />
          </div>
        </a>

        <div className={'bg-title'}>About</div>
      </div>

      <div id='aboutContent' className={styles.about_description + ' border-top'}>
        <div className={'side-grid-layout'}>
          <span className={'side-title is-sticky'}>Career</span>
          <div className={styles.about_description__heading + ' is-sticky'}>
            <h3><span className={'italic-subtitle'}>My designer career</span></h3>
            <h3><span className={'subtitle'}>Graduate in HCI</span></h3>
            <p className={styles.about_description__text}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
            <div className={'arrow-icon ' + styles.about_description__icon}>
              <Icon icon={arrowDownRight} />
            </div>
          </div>
        </div>

        <div className={styles.about_description__list}>
          <div className={styles.about_description__item}>
            <div className={styles.about_description__item__title}><span>User Experience</span>
            </div>
            <div className={styles.about_description__item__text}>
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>

          <div className={styles.about_description__item}>
            <div className={styles.about_description__item__title}><span>Usability</span>
            </div>
            <div className={styles.about_description__item__text}>
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>

          <div className={styles.about_description__item}>
            <div className={styles.about_description__item__title}><span>UI / UX Design</span>
            </div>
            <div className={styles.about_description__item__text}>
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about_illustration}>
        <div className={styles.about_illustration__canvas_1}>
          <img src='/about-image.jpg' alt='about image' />
        </div>

        <div className={'clearfix'}></div>

        <div className={styles.about_illustration__text_1}>
          <h3><span>Lorem Ipsum Dolor</span></h3>
          <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        </div>

        <div className={styles.about_illustration__canvas_2}>
          <img src='/about-development.jpg' alt='about image' />
        </div>

        <div className={'clearfix'}></div>

        <div className={styles.about_illustration__text_2}>
          <h3><span>Lorem Ipsum Dolor</span></h3>
          <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        </div>

        <div className={'clearfix'}></div>
      </div>
    </section>
  )
}