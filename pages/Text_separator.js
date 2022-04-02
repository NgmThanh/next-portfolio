import styles from '../styles/Text_separator.module.scss'

export default function Text_separator() {
  return (
    <section className={styles.text_separator_section}>
      <div className={styles.text_separator__container}>
        <div className={styles.text_separator__container_1}>
          <span className={'title'}>CREATIVE — DIGITAL — DESIGN — </span>
          <span className={'title'}>CREATIVE — DIGITAL — DESIGN — </span>
        </div>
      </div>

      <div className={styles.text_separator__container}>
        <div className={styles.text_separator__container_2}>
          <span className={'title'}>CREATIVE — DIGITAL — DESIGN — </span>
          <span className={'title'}>CREATIVE — DIGITAL — DESIGN — </span>
        </div>
      </div>
    </section>
  )
}