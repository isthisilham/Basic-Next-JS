import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>users</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
