/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { signIn, useSession, signOut } from 'next-auth/react'
import { LogOut, Menu, X } from 'lucide-react'

export const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { data, status } = useSession()

  const handleSignIn = () => {
    signIn()
  }

  const handleLogout = () => {
    setMenuIsOpen(false)
    signOut()
  }

  const toggleMenu = () => {
    setMenuIsOpen((state) => !state)
  }

  return (
    <header className="container mx-auto flex h-24 items-center justify-between p-5 py-0 shadow-xl sm:shadow-none">
      <Image width={183} height={32} src="/logo.svg" alt="FSW" />

      {status === 'unauthenticated' && (
        <button
          className="text-sm font-semibold text-brand-purple-500"
          onClick={handleSignIn}
        >
          Login
        </button>
      )}

      {status === 'authenticated' && data.user && (
        <>
          <div className="relative flex items-center gap-3 rounded-[999px] border border-brand-gray-200 px-4 py-2">
            {!menuIsOpen === true ? (
              <Menu size={24} onClick={toggleMenu} />
            ) : (
              <X size={24} onClick={toggleMenu} />
            )}

            <Image
              src={data.user?.image!}
              width={32}
              height={32}
              alt={data.user?.name!}
              className="rounded-full"
            />

            {menuIsOpen && (
              <div className="absolute left-0 top-14 flex h-full w-full items-center justify-center shadow-sm">
                <button
                  onClick={handleLogout}
                  className=" flex items-center gap-2 text-sm font-semibold text-brand-purple-500"
                >
                  <LogOut />
                  Sair
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  )
}
