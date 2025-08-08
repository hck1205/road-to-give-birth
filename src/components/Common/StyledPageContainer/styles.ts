import styled from '@emotion/styled';

export const StyledPageContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
`;
