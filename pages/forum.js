import Layout from '../components/layout'
import Head from 'next/head'
import { useSession, getSession } from 'next-auth/client'
import { connectToDatabase } from "../lib/mongodb";


export default function Forum ({customers}) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.
  const [ session, loading ] = useSession()

  return (
        <div className="container">
          <Head>
            <title>Forum</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    <Layout>
       <main>
       <h1 className="title">Rider Forum</h1>
      <div className="card">
       <h2 className="subtitle"><a>Leave a Review:</a></h2>
        <ul>
          {customers.map((customer) => (
            <li>
              <h4><a>{customer.firstname}</a>- {customer.location} </h4>
              <ul>
                {customer.reviews.map((review) => (
                  <li>{review}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
       <h2 className="subtitle"><a>Events/Meetups:</a></h2>
        <ul>
            <li>
              <h4><a></a></h4>
              <ul>
                  <li></li>
              </ul>
            </li>
        </ul>
      </div>
      </main> 

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
          min-height: 90vh;
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
        a:hover,
        a:focus,
        a:active {
          color: rgb(31, 45, 243);
        }
        .card {
          margin: 1rem;
          margin-top: 2rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 175%;
        }

        .card:hover,
        .card:focus,
        .card:active {
          border-color: #0070f3;
        }

        .card h4 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .logo {
          height: 3em;
        }
      `}</style>
    </div>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const customers = await db
        .collection("customers")
        .find({})
        .sort({ metacritic: -1 })
        .limit(5)
        .toArray();
  return {
    props: {
      session: await getSession(context),
      customers: JSON.parse(JSON.stringify(customers))
    }
  }
}