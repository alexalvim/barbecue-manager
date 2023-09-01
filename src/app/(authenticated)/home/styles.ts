import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import styled from 'styled-components';

export const LoadingMessage = styled.span`
  color: ${colors.darkestColor};
  font-size: ${typo.small};
  padding: 0 ${spaces.base};
  width: 100%;
  
  @media (min-width: 48rem) {
    max-width: ${spaces.containerWidth};
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 ${spaces.base};
  margin: 0 auto;
  width: 100%;
  transform: translateY(-60px);
  
  @media (min-width: 48rem) {
    max-width: ${spaces.containerWidth};
  }
`;