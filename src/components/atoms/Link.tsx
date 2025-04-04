import { styled } from '@/stitches'

export const Link = styled('a', {
  transition: 'all',
  textDecoration: 'none',
  padding: '0.25rem',
  color: '$primary600',
  '&:hover': { color: '$primary700' },
  '&:focus': { color: '$primary800' },
  '&:active': { color: '$primary900' },
})
