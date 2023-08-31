import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  color: ${colors.dangerRed};
  background-color: ${colors.lightRed};
  font-size: ${typo.tiny};
  font-weight: bold;
  padding: ${spaces.base};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${colors.dangerRed};
  margin-bottom: ${spaces.base};
`;