import styles from '../styles/Menu.module.scss'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div>Minh Thanh</div>
      <div>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  )
}