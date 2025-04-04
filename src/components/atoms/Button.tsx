import { styled } from 'styled-system/jsx'

export const Button = styled('button', {
  base: {
    transition: 'all',
    cursor: 'pointer',
    fontSize: 'md',
    borderRadius: 'md',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'secondary.500',
    backgroundColor: 'secondary.200',
    paddingBlock: '2',
    paddingInline: '4',
  },
  variants: {
    primary: {
      true: {
        color: 'white',
        borderColor: 'transparent',
        backgroundColor: 'primary.500',
        '&:hover': { backgroundColor: 'primary.600' },
        '&:focus': { backgroundColor: 'primary.700' },
        '&:active': { backgroundColor: 'primary.800' },
      },
    },
  },
})
