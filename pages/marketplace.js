import Layout from "../components/layout";
import { connectToDatabase } from "../lib/mongodb";


export default function Marketplace({marketplace}) {
    return (
        <div className="container">
        <Layout>
            <main>
                <img src="/marketplace.gif" alt="marketplace" className="market"/>
                <h1 className="title">Marketplace</h1>
                <h2 className="subtitle"><a>For Sale: </a></h2>
                <ul>
                    {marketplace.map((market) => (
                        <li><a>{market.posttitle}</a> - {market.user}<br></br><p>{market.description} </p></li>
                    ))}
                </ul>
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
        .market {
            display: inline;
            min-height: 3rem;
        }
        .title:hover,
        .title:focus,
        .title:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .logo {
            height: 3em;
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
        `}</style>
        </div>
    )
}
export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const marketplace = await db
        .collection("marketplace")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();
    return {
      props: {
        marketplace: JSON.parse(JSON.stringify(marketplace))
      }
    }
  }