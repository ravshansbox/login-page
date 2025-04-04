import { type FC, type PropsWithChildren } from 'react'
import { Label } from '../atoms'

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
