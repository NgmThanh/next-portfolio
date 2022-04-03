import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <section className={styles.footer_section}>
      <ul>
        <li className={'underline'}><a href={'#'}>Dribbble</a></li>
        <li className={'underline'}><a href={'#'}>Instagram</a></li>
        <li className={'underline'}><a href={'#'}>LinkedIn</a></li>
      </ul>
    </section>
  )
}