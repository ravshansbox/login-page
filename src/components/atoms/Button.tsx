import { styled } from '@/stitches'

export const Button = styled('button', {
  transition: 'all',
  cursor: 'pointer',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$secondary500',
  backgroundColor: '$secondary200',
  paddingBlock: '0.5rem',
  paddingInline: '1rem',
  variants: {
    primary: {
      true: {
        color: 'white',
        borderColor: 'transparent',
        backgroundColor: '$primary500',
        '&:hover': { backgroundColor: '$primary600' },
        '&:focus': { backgroundColor: '$primary700' },
        '&:active': { backgroundColor: '$primary800' },
      },
    },
  },
})
