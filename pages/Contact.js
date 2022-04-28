import styles from '../styles/Contact.module.scss'
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-carbon/arrow-right';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact_section + ' mt-120'}>
      <div className={styles.contact_background}>
        <div className={styles.contact_title}>
          <span className={styles.contact_title__subtitle + ' side-subtitle'}>Contact</span>

          <h1 className={'title-primary ml-1'}>
            <span><div className={'line-left'}></div>Let&#039;s work</span><br></br>
            <span className={'ml-2 colored'}>Together</span>
          </h1>

          <a href="mailto:nmthanh99@gmail.com">
            <div className={'arrow-button'}>
              <Icon icon={arrowRight} />
            </div>
          </a>
        </div>
      </div>

      <ul className={styles.contact_social}>
        <li className={'underline'}><a href={'#'}>Dribbble</a></li>
        <li className={'underline'}><a href={'#'}>Instagram</a></li>
        <li className={'underline'}><a href={'#'}>LinkedIn</a></li>
      </ul>
    </section>
  )
}