import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: 'src/styled-system',
  strictPropertyValues: true,
  strictTokens: true,
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          'primary.100': { value: '{colors.blue.100}' },
          'primary.200': { value: '{colors.blue.200}' },
          'primary.300': { value: '{colors.blue.300}' },
          'primary.400': { value: '{colors.blue.400}' },
          'primary.500': { value: '{colors.blue.500}' },
          'primary.600': { value: '{colors.blue.600}' },
          'primary.700': { value: '{colors.blue.700}' },
          'primary.800': { value: '{colors.blue.800}' },
          'primary.900': { value: '{colors.blue.900}' },
          'secondary.100': { value: '{colors.slate.100}' },
          'secondary.200': { value: '{colors.slate.200}' },
          'secondary.300': { value: '{colors.slate.300}' },
          'secondary.400': { value: '{colors.slate.400}' },
          'secondary.500': { value: '{colors.slate.500}' },
          'secondary.600': { value: '{colors.slate.600}' },
          'secondary.700': { value: '{colors.slate.700}' },
          'secondary.800': { value: '{colors.slate.800}' },
          'secondary.900': { value: '{colors.slate.900}' },
        },
      },
    },
  },
})
