import { getToken } from 'next-auth/jwt'

import { GraphqlOperation } from '@genql/runtime'

import { chainConfig } from '~/config/chain'
import { clientEnv } from '~/config/client'
import { jwtIsExpired } from '~/lib/jwt'
import { logger } from '~/lib/logger'

import { createClient } from './generated'

export { everything } from './generated'

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
}


// ! Top Shot API GraphQL Client does not work with GenQL. Getting error [error GenqlError: error with ${operation.SchemaName}]. TODO: Fix this by either reporting to TopShot or different GraphQL client
// Server side client
export function getTopShotGraphQLSdk({ config, jwt }: GraphQLSdkProps = {}) {
  return createClient({
    fetcher: async (operation) => {
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'API web-request/Fantasy-Top-Shot App',
      }

      logger.info(
        '\n ==> GraphQL Query : \n',
        JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', '')),
      )
        console.log('operation', JSON.stringify(operation, null, 2))
      let fetchResponse
      try {
        // TODO: Env variable for this
        fetchResponse = fetch('https://nbatopshot.com/marketplace/graphql', {
          method: 'POST',
          headers,
          body: JSON.stringify(operation),
          ...config,
        }).then((response) => response.json())
      } catch (error) {
        logger.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })
}

export function getTopShotClientGraphQLSdk({ config }: Omit<GraphQLSdkProps, 'jwt'> = {}) {
  return getTopShotGraphQLSdk({ config })
}

