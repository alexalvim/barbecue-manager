import { colors } from '@/colors';
import { spaces } from '@/spaces';
import { typo } from '@/typo';
import styled from 'styled-components';

export const ContentWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.large};
`;

export const LabelText = styled.label`
  color: ${colors.darkestColor};
  font-size: ${typo.medium};
  font-weight: bold;
  margin-bottom: ${spaces.base};
`;

export const FieldInput = styled.input`
  border: none;
  font-size: ${typo.small};
  padding: ${spaces.medium} ${spaces.base};

  &::placeholder {
    font-style: italic;
  }
`;

export const FieldTextArea = styled.textarea`
  border: none;
  font-size: ${typo.small};
  padding: ${spaces.medium} ${spaces.base};
  resize: none;
  height: 200px;
  font-family: __Inter_20951f, __Inter_Fallback_20951f;

  &::placeholder {
    font-style: italic;
    font-family: __Inter_20951f, __Inter_Fallback_20951f;
  }
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: ${typo.tiny};
  color: ${colors.dangerRed};
  margin-top: ${spaces.small};
`;