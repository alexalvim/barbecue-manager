import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${colors.mainColor};
  background-image:
    linear-gradient(to bottom, ${colors.mainColor}00 50%, ${colors.mainColor}),
    url('/assets/images/bbq-pattern.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 400px;
`;

export const BannerTitle = styled.h1`
  color: ${colors.darkestColor};
  font-size: ${typo.large};
  margin-top: 70px;
  padding: 0 ${spaces.base};
`;