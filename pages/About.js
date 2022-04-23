import styles from '../styles/About.module.scss'
import { Icon } from '@iconify/react';
import arrowDownRight from '@iconify/icons-carbon/arrow-down-right';

export default function About() {
  return (
    <section id='about' className={styles.about_section + ' mt-120'}>
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

        <div className={'bg-title'}>About</div>
      </div>

      <div id='aboutContent' className={styles.about_description}>
        <h3 className={'subtitle col-4 ml-2 mt-120'}>I'm a designer based in <span className={'colored'}>France</span></h3>
        <p className={'col-3 ml-3 mt-120'}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>

        <div className={styles.about_description__flex_content + ' mt-200'}>
          <div>a</div>
          <div></div>
        </div>

        <h3 className={'subtitle col-4 ml-6 mt-120'}>I'm a designer based in <span className={'colored'}>France</span></h3>
        <p className={'col-3 ml-7 mt-120'}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>

        <div className={styles.about_description__canvas + ' col-7 ml-1 mt-200'}>
          <img src='/about-development.jpg' alt='development image' />
        </div>
      </div>

      <div className={styles.about_process + ' mt-200'}>
          <div className={styles.about_process__item + ' col-10'}>
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
    </section>
  )
}