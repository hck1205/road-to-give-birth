'use client';

import { ReactNode } from 'react';
import { Provider as JotaiProvider } from 'jotai';
import { ThemeProvider } from '@emotion/react';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/themeAtom';
import { lightTheme, darkTheme } from '@/styles/theme';

/**
 * @note
 * useAtom()이 JotaiProvider 내부에서만 실행됨 (권장 방식)
 */
const InnerProviders = ({ children }: { children: ReactNode }) => {
  const [mode] = useAtom(themeAtom);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <JotaiProvider>
      <InnerProviders>{children}</InnerProviders>
    </JotaiProvider>
  );
};

export default AppProviders;
