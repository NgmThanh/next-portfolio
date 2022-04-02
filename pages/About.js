import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_description}>
        <div className={styles.about_description__container}>
          <p className={styles.about_description__title}>About me</p>
        </div>

        <div className={styles.about_description__container}>
          <p className={styles.about_description__text}>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        </div>
      </div>

      <div className={styles.about_illustration}>

      </div>
    </section>
  )
}