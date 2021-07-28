import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Header () {
    const [ session, loading ] = useSession()
    
    return (
      <header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <div className="header">
        <div className = "signedInStatus">
          <p className="notSignedInText">
            {!session && <>
              <span>You are not signed in</span>
              <a
                  href={`/api/auth/signin`}
                  className="buttonPrimary"
                  onClick={(e) => {
                    e.preventDefault()
                    signIn()
                  }}
                  >
                  Sign in
                </a>
            </>}
            {session && <>
              {session.user.image && <span/>}
              <span className="signedInText">
                <small>Signed in as</small><br/>
                <strong>{session.user.email || session.user.name}</strong>
                </span>
              <a
                  href={`/api/auth/signout`}
                  className="button"
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                  >
                  Sign out
                </a>
            </>}
          </p>
        </div>
        <nav>
          <ul className="navItems">
            <li className="navItem"><Link href="/"><a>Home</a></Link> </li>
            <li className="navItem"><Link href="/profile"><a>Profile</a></Link> </li>
            <li className="navItem"><Link href="/forum"><a>Forum</a></Link> </li>
            <li className="navItem"><Link href="/marketplace"><a>Marketplace</a></Link> </li>
          </ul>
        </nav>
        </div>
        
        <style jsx>{`
        
        .signedInStatus {
          display: block;
          min-height: 4rem;
          width: 100%;
        }
        .signedInText,
        .notSignedInText {
          position: absolute;
          padding-top: .8rem;
          left: 1rem;
          right: 6.5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          display: inherit;  
          z-index: 1;
          line-height: 1.3rem;
        }
        
        .signedInText {
          padding-top: 0rem;
          left: 4.6rem;
        }
        .button,
        .buttonPrimary {
          float: right;
          margin-right: -.4rem;
          font-weight: 500;
          border-radius: .3rem;
          cursor: pointer;
          font-size: 1rem;
          line-height: 1.4rem;
          padding: .7rem .8rem;
          position: relative;
          z-index: 10;
          background-color: transparent;
          color: #555;
        }
        
        .buttonPrimary {
          background-color: #346df1;
          border-color: #346df1;
          color: #fff;
          text-decoration: none;
          padding: .7rem 1.4rem;
        }
        
        .buttonPrimary:hover {
          box-shadow: inset 0 0 5rem rgba(0,0,0,0.2)
        }
        .navItems {
          margin-bottom: 0rem;
          border-bottom: 2px solid black;
          padding-bottom: 10px;
          list-style: none;
        }
        
        .navItem {
          font-size: 1.3rem;
          font-weight: 500;
          display: inline-block;
          margin-right: 5rem;
          margin-left: 5rem;
        }
        `}</style>
        </header>
    )
  }