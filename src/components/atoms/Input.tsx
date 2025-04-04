import { styled } from 'styled-system/jsx'

export const Input = styled('input', {
  base: {
    transition: 'all',
    fontSize: 'md',
    paddingBlock: '2',
    paddingInline: '4',
    backgroundColor: 'secondary.200',
    borderRadius: 'md',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'secondary.300',
    '&:hover': { borderColor: 'secondary.400' },
    '&:focus': { borderColor: 'secondary.500' },
  },
})
