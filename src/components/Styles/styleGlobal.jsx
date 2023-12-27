import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        '--s': '200px',
        '--c1': '#1d1d1d',
        '--c2': '#4e4f51',
        '--c3': '#3c3c3c',
        background: `
          repeating-conic-gradient(from 30deg, #0000 0 120deg, var(--c3) 0 180deg) calc(.5*var(--s)) calc(.5*var(--s)*0.577),
          repeating-conic-gradient(from 30deg, var(--c1) 0 60deg, var(--c2) 0 120deg, var(--c3) 0 180deg)
        `,
        backgroundSize: 'var(--s) calc(var(--s)*0.577)',
      },
    },
  },
});

export default theme;