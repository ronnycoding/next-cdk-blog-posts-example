import '../styles/globals.css'
import Link from 'next/link'

import '../configureAmplify'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
