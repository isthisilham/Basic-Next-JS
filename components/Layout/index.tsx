import {ReactNode} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.css';

interface Layoutprops {
    children: ReactNode;
}

export default function Layout(props: Layoutprops) {
    const { children } = props;
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}
