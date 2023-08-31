import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import Link from 'next/link';
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: ${colors.darkestColor};
  font-size: ${typo.small};
  font-weight: bold;
  cursor: pointer;
`;