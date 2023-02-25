import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { AuthProvider } from '~/context/auth.context'
import { GlobalContextProvider } from '~/context/global.context'
import { RootLayout } from '~/layouts/root'
/* * importing public css assets */
import '~/public/assets/css/tailwind.css'
import '~/public/assets/css/icons.min.css'
import '~/styles/globals.css'
import '~/styles/line.css'
import '~/styles/home-wizard-header.css'
import '~/styles/home-wizard-steps.css'
import '~/styles/wizart-chat.css'

import '../config/flow/config'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <AuthProvider>
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