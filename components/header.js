import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Header () {
    const [ session, loading ] = useSession()
    
    return (
      <header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <div>
          <p>
            {!session && <>
              <span>You are not signed in</span>
              <a
                  href={`/api/auth/signin`}
                  className={'button'}
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
              <span >
                <small>Signed in as</small><br/>
                <strong>{session.user.email || session.user.name}</strong>
                </span>
              <a
                  href={`/api/auth/signout`}
                  className={'button'}
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
       
      </header>
    )
  }