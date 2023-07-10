'use client'
import { FC } from 'react'
import { signIn, useSession } from 'next-auth/react'

const Home: FC = () => {
  const { data } = useSession()
  return <h1>home</h1>
}

export default Home
