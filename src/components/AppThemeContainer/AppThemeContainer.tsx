'use client';

import { ReactNode } from 'react';
import { StyledAppThemeContainer } from './styles';

interface Props {
  children: ReactNode;
}
const AppThemeContainer = ({ children }: Props) => {
  return <StyledAppThemeContainer>{children}</StyledAppThemeContainer>;
};

export default AppThemeContainer;
