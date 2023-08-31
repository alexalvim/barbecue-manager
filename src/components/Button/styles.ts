import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${colors.darkestColor};
  border: none;
  color: ${colors.lightestColor};
  font-size: ${typo.small};
  border-radius: 2rem;
  padding: ${spaces.medium} ${spaces.large};
  font-weight: bold;
  cursor: pointer;
`;