import { styled } from 'styled-system/jsx'

export const Link = styled('a', {
  base: {
    transition: 'all',
    textDecoration: 'none',
    padding: '1',
    color: 'primary.600',
    '&:hover': { color: 'primary.700' },
    '&:focus': { color: 'primary.800' },
    '&:active': { color: 'primary.900' },
  },
})
