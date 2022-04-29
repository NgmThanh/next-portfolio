import styles from '../styles/About.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';

export default function About() {
  return (
    <section id='about' className={styles.about_section + ' mt-200'}>
      <div className={styles.about_background}>
        <div className={styles.about_title}>
          <span className={styles.about_title__subtitle + ' side-subtitle'}>Introduction</span>

          <h1 className={'title-primary ml-1'}>
            <span><div className={'line-left'}></div>About</span><span className={'colored'}>&nbsp;me</span><br></br>
            <span className={'ml-2'}>and my</span><span className={'colored'}>&nbsp;career</span>
          </h1>

          <a href='#aboutContent'>
            <div className={'arrow-button'}>
              <Icon icon={arrowDownRight} />
            </div>
          </a>
        </div>
      </div>

      <div id='aboutContent' className={styles.about_description + ' mt-200'}>
        <h3 className={'subtitle col-4 ml-2'}>I&#039;m a designer based in <span className={'colored'}>France</span></h3>
        <p className={'col-3 ml-3 mt-120'}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>

        <div className={styles.about_description__flex_content + ' mt-200'}>
          <div className={'col-4 ml-1'}>
            <h3 className={'title-secondary'}>Human<br></br><span className={'colored'}>Computer</span><br></br>Interaction</h3>
            <div className={'clearfix'}></div>
            <p className={'col-3'}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
          </div>
          <div className={styles.about_description__canvas + ''}>
            <img src='/about-development.jpg' alt='development image' />
          </div>
        </div>

        <h3 className={'subtitle col-4 ml-6 mt-200'}>I&#039;m a designer based in <span className={'colored'}>France</span></h3>
        <p className={'col-3 ml-7 mt-120'}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>

        <div className={styles.about_description__canvas + ' col-7 ml-1 mt-200'}>
          <img src='/about-development.jpg' alt='development image' />
        </div>
      </div>

      <div className={styles.about_process + ' mt-200'}>
        <div>
          <span className={'side-subtitle is-sticky'}>Design Process</span>
        </div>
        <div>
          <div className={styles.about_process__item}>
            <div className={styles.about_process__item__title}>
              <span>User Experience</span>
            </div>
            <div className={styles.about_process__item__text}>
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>

          <div className={styles.about_process__item}>
            <div className={styles.about_process__item__title}>
              <span>Usability</span>
            </div>
            <div className={styles.about_process__item__text}>
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>

          <div className={styles.about_process__item}>
            <div className={styles.about_process__item__title}>
              <span>UI / UX Design</span>
            </div>
            <div className={styles.about_process__item__text}>
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}