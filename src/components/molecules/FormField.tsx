import { Label } from '@/components/atoms'
import { type FC, type PropsWithChildren } from 'react'

export const FormField: FC<PropsWithChildren<{ label: string }>> = ({
  children,
  label,
}) => {
  return (
    <Label>
      <span>{label}</span>
      {children}
    </Label>
  )
}
