import { ComponentPropsWithoutRef, FC } from 'react'
import { cn } from '@/libs/utils'

type ButtonProps = ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        'appearance-none rounded-lg bg-brand-purple-500 p-2 text-sm font-medium text-white shadow transition-all hover:bg-brand-purple-700',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
