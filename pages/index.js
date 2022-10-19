import Head from 'next/head'
import Image from 'next/image'
import { useReactCountdown } from '../components/useCoundownTimer';
import styles from '../styles/Home.module.css'
export default function Home() {
  const { days, hours, minutes, seconds } = useReactCountdown(
    'December 04, 2022 00:00:00'
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Neethu and Anand Wedding</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/anandandneethu.jpeg" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#111827" />
				<meta property="og:title" content="Neethu & Anand" />
				<meta property="og:description" content="Wedding website of Neethu and Anand" />
				<meta property="og:image" content="/images/anandandneethu.jpeg" />
				<meta name="description" content="Wedding website of Neethu and Anand" />
      </Head>

      <main className={styles.main}>
        <Image src={"/images/anandandneethu.jpeg"} 
        alt="anand and neethu" 
        width={512}
        height={462}/>
        <h1 className={styles.title}>
          neethu & anand
        </h1>
        <h3>ARE GETTING MARRIED</h3>
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>WHEN</h2>
            <p>December 4, 2022</p>
            <p>A Sunday</p>
            <p>{`${days} days ${hours} hrs ${minutes} mins ${seconds} s`}</p>
          </div>
          <div className={styles.card}>
            <h2>WHERE</h2>
            <p>Rakthakanda Swamy Temple, Omalloor</p>
            <a href='https://goo.gl/maps/Gj5VownHwLPmNhds8'>see on map</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
       with lot of love
      </footer>
    </div>
  )
}
