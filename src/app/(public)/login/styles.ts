import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const ContentHolder = styled.div`
  padding: 0 ${({ theme }) => theme.spaces.base};
  margin: 0 auto;
  width: 100%;
  transform: translateY(-200px);
  
  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.authContainerWidth};
  }
`;

export const ActionsHolder = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: ${({ theme }) => theme.spaces.large};
  }
`;

