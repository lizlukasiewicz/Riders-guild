import Head from 'next/head'
import { connectToDatabase } from '../lib/mongodb'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Rider Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <main>
      <h1 className="title">The Riders Guild</h1>
      <h2 className="subtitle"> All Gears Welcomed </h2>

        <div className="grid">
          <a className="card">
          <Link href="/forum" >
            <h3>Search our Forum &rarr;</h3>
          </Link>
            <p>Join discussions, start a new thread, leave comments or reviews</p>
          </a>

          <a className="card">
            <Link href="/marketplace">
            <h3>Marketplace &rarr;</h3>
            </Link>
            <p>Post or Purchase full bikes, parts, gear, and tools</p>
          </a>

          <a className="card">
            <Link href="/profile">
            <h3>Profile &rarr;</h3>
            </Link>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a className="card">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <div>

      </div>
      </Layout>

      <footer>
          Powered by{' '}
          <img src="/yubaba.png" alt="Yubaba Logo" className="logo" />
      </footer>

      <style jsx>{`
        .container {
          background-image: url("bikeguildbackground.jpeg");
          background-size: cover;
          background-repeat: no-repeat;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          background-color: rgba(82, 97, 112, 0.541);
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          background-color: rgba(237, 238, 231, 0.774);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          background-color: rgba(79, 97, 116, 0.302);
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 3em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}