import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ClientOnly from "../common/components/ClientOnly";
import Countries from "../common/components/Countries";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries API</title>
        <meta name="description" content="Countries API Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ClientOnly>
          <Countries />
        </ClientOnly>
      </main>

      <footer className={styles.footer}>
        Powered by NextJS{' '}
      </footer>
    </div>
  )
}
