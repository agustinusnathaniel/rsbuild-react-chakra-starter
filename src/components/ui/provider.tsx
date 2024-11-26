'use client';

import { theme } from '@/lib/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
