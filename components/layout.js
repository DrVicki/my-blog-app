import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Dr. Vicki";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js blog demo"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/headerImage.png"
              alt={name}
              className={styles.headerImage}        
            />
            <h1>Dr. Vicki's Blog</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/headerImage.png"
                  alt={name}
                  className={styles.headerImage}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>Dr. Vicki's Blog</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}