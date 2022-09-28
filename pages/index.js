import Head from 'next/head'
import HomePage from './Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio-Home</title>
        <meta name="description" content="Portofolio-Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
