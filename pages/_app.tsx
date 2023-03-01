import { NextComponentType, NextPageContext } from 'next'
import { SessionProvider, useSession } from 'next-auth/react'
import { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { AuthProvider } from '~/context/auth.context'
import { GlobalContextProvider } from '~/context/global.context'
import { RootLayout } from '~/layouts/root'
import '~/public/assets/css/icons.min.css'

/* * importing public css assets */
import '~/public/assets/css/tailwind.css'
import '~/styles/globals.css'
import '~/styles/home-wizard-header.css'
import '~/styles/home-wizard-steps.css'
import '~/styles/line.css'
import '~/styles/wizart-chat.css'

import '../config/flow/config'

export type ComponentWithAuth<P = {}> = NextComponentType<NextPageContext, any, P> & {
  requireAuth?: boolean
}

type AppProps<P = {}> = NextAppProps<P> & {
  Component: ComponentWithAuth
}

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Refetch session every hour since niftory tokens expire after 1 hour */}
      <SessionProvider session={pageProps.session} refetchInterval={60 * 60}>
        <SessionSync />
        <AuthProvider requireAuth={Component.requireAuth}>
          <GlobalContextProvider>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </GlobalContextProvider>
        </AuthProvider>
      </SessionProvider>
    </>
  )
}

function SessionSync() {
  const session = useSession()
  // keep jwt in sync with next session
  useEffect(() => {
    if (session?.data?.user?.jwt)
      localStorage.setItem(clientEnv.jwtLocalStorageKey, session.data?.user?.jwt || '')
  }, [session])

  return <></>
}
