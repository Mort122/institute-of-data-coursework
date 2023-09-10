import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <h1>My First Next App</h1>
      </div>
    </main>
  )
}
