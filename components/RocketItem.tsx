import { VFC } from 'react'
import { Rocket } from '../types/types'

interface Props {
  rocket: Rocket
}

export const RocketItem: VFC<Props> = ({ rocket }) => {
  return (
    <li key={rocket.id}>
      <p className="my-3 font-bold">{rocket.name}</p>
      <span>
        {'-> '}
        {rocket.mass.kg}
        {'[kg] '}
        {rocket.height.meters}
        {'[m] '}
        {rocket.diameter.meters}
        {'[m] '}
      </span>
    </li>
  )
}
