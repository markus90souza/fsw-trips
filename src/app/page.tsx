'use client'
import { FC } from "react"
import { signIn, useSession } from "next-auth/react"

const Home: FC = () => {

  const { data }  = useSession()
  return (
    <div className="">

      <button onClick={() => signIn()}>
        Login
      </button>

      <h1>{data?.user?.name}</h1>
    </div>
  )
}

export default Home