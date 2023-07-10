import { cn } from '@/libs/utils'
import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean
  errorMessage?: string
}

function Input(
  { className, error, errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) {
  return (
    <div className="flex w-full flex-col">
      <input
        ref={ref}
        className={cn(
          'text-dark rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal placeholder-black placeholder-opacity-20 outline-none transition-all',
          error ? 'border-red-500' : 'focus:ring-1 focus:ring-brand-purple-500',
          className,
        )}
        {...props}
      />
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  )
}

export default forwardRef(Input)
