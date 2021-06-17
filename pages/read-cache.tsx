import Link from 'next/link'
import { Layout } from '../components/Layout'
import { useQueryClient } from 'react-query'
import { Rocket } from '../types/types'
import { RocketItem } from '../components/RocketItem'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

const ReadCache = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>('rockets')
  return (
    <Layout title="read cache">
      <p className="my-5 text-blue-500 text-xl font-bold">
        Read out cache data
      </p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      <Link href="/" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default ReadCache
