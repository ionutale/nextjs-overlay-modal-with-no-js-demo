import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Container}>
      <label>
        <input className={styles.ShowModalCTA} type="checkbox" />
        <h3 className={styles.OpenButton}>See More</h3>
        <div className={styles.Content}>SOME CONTENT</div>
        <div className={styles.Close}>x</div>
      </label>

    </div>
  )
}
