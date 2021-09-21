import type { NextPage } from 'next'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <h1 className={styles['title-homepage']}>Welcome Muhammad Ilham</h1>
    <Footer />
    </>
  )
}

export default Home
