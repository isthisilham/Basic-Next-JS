import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.css';


interface Layoutprops {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: Layoutprops) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>NextJS Basic | {pageTitle}</title>
                <meta name="description" content="Website NextJS Basic for Beginner" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}
