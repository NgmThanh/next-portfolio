import styles from '../styles/Contact.module.scss'
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-carbon/arrow-right';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact_section}>
      <div className={styles.contact_title + ' border-top'}>
        <div className={'side-grid-layout'}>
          <span className={'side-title col-2'}>Contact</span>
          <h2 className={'title'}>
            <span>Let's<br></br></span><span className={'italic title-colored'}>work</span><span>&nbsp;together</span>
          </h2>
        </div>

        <a href="mailto:nmthanh99@gmail.com">
          <div className={'arrow-button'}>
            <Icon icon={arrowRight} />
          </div>
        </a>
        <div className={'bg-title'}>TOUCH</div>
      </div>
    </section>
  )
}