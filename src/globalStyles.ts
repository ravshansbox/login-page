import { globalCss } from '@/stitches'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'system-ui, sans-serif',
    margin: 0,
  },
})
