import { ReactNode } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

import { StyledPageContainer } from './styles';

interface Props {
  children: ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <StyledPageContainer>
      <ThemeToggle />
      {children}
    </StyledPageContainer>
  );
};

export default PageContainer;
