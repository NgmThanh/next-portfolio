import styles from '../styles/Contact.module.scss'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact_section}>
      <div className={styles.contact_title + ' border-top'}>
        <div className={'side-grid-layout'}>
          <span className={'side-title'}>Contact</span>
          <h2 className={'title'}>
            <span>Let's<br></br></span><span className={'italic title-colored'}>work</span><span>&nbsp;together</span>
          </h2>
        </div>

        <div className={'bg-title'}>TOUCH</div>
      </div>

      <div className={'border-top'}></div>
    </section>
  )
}