import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from '@apollo/client'
import client from '../apollo-client/apollo-client'

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Country {
        Country {
          name
          capital
        }
      }
    `,
  });

  return {
    props: {
      countries: data.Country.slice(0, 10),
    },
  };
}

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {countries.map((country) => (
            <div key={country.code} className={styles.card}>
              <h3>{country.name}</h3>
              <p>
                {country.name} - {country.capital}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NextJS{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
