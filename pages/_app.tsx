import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, } from 'next-auth/react';
import { Session } from 'next-auth';

interface MyAppProps extends AppProps {
  session: Session | null | undefined
}

export default function App({ Component, session, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
