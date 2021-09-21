import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <header>
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>about</a></Link>
        </li>
        <li>
          <Link href="/users"><a>users</a></Link>
        </li>
      </ul>
    </header>
    <h1>Welcome Muhammad Ilham</h1>
    </>
  )
}

export default Home
