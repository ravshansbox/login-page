import { createStitches } from '@stitches/react'

export const { css, globalCss, styled } = createStitches({
  media: {
    md: '(min-width: 768px)',
  },
  theme: {
    colors: {
      primary100: '#eff6ff',
      primary200: '#dbeafe',
      primary300: '#bfdbfe',
      primary400: '#93c5fd',
      primary500: '#3b82f6',
      primary600: '#2563eb',
      primary700: '#1d4ed8',
      primary800: '#1e40af',
      primary900: '#1e3a8a',
      secondary100: '#f8fafc',
      secondary200: '#f1f5f9',
      secondary300: '#e2e8f0',
      secondary400: '#cbd5e1',
      secondary500: '#64748b',
      secondary600: '#475569',
      secondary700: '#334155',
      secondary800: '#1e293b',
      secondary900: '#0f172a',
    },
  },
})
