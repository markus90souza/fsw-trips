'use client'
import { FC } from 'react'
import { Search } from './components/search'

const Home: FC = () => {
  return (
    <div className="container mx-auto p-5">
      <Search />
    </div>
  )
}

export default Home
