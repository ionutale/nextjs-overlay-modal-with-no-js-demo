import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Container}>
      <label>
        <input className={styles.ShowModalCTA} type="checkbox" />
        <div className={styles.OpenButton}>OPEN</div>
        <div className={styles.Content}>SOME CONTENT</div>
        <div className={styles.Close}>X</div>
      </label>
    </div>
  )
}
