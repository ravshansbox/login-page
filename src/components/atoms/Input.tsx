import { styled } from '@/stitches'

export const Input = styled('input', {
  transition: 'all',
  fontSize: '1rem',
  paddingBlock: '0.5rem',
  paddingInline: '1rem',
  backgroundColor: '$secondary200',
  borderRadius: '0.5rem',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$secondary300',
  '&:hover': { borderColor: '$secondary400' },
  '&:focus': { borderColor: '$secondary500' },
})
