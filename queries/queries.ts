import { gql } from 'graphql-request'

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      mass {
        kg
      }
      height {
        meters
      }
      diameter {
        meters
      }
    }
  }
`
