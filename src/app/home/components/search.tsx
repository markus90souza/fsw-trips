import { Button } from '@/components/button'
import CurrencyInput from '@/components/currency-input'
import Datepicker from '@/components/datepicker'
import Input from '@/components/input'
import React from 'react'

export const Search = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold text-brand-purple-700 ">
        Encontre sua próxima{' '}
        <span className="text-brand-purple-500">viagem!</span>
      </h1>

      <div className="mt-5 flex flex-col gap-4">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <Datepicker
            className="w-full"
            onChange={() => {
              console.log('')
            }}
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>

        <Button>Buscar</Button>
      </div>
    </div>
  )
}
