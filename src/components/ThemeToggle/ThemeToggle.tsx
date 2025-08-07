'use client';

import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/themeAtom';

import * as S from './styles';

const ThemeToggle = () => {
  const [mode, setMode] = useAtom(themeAtom);

  const toggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <S.ToggleButton onClick={toggle}>현재 모드: {mode}</S.ToggleButton>;
};

export default ThemeToggle;
