import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import styled from 'styled-components';

export const ModalTitle = styled.h2`
  color: ${colors.mainColor};
  font-size: ${typo.large};
  margin-bottom: ${spaces.large};
`;


export const FieldsWrapper = styled.div`
  input, textarea {
    border: solid 1px ${colors.darkestColor};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;