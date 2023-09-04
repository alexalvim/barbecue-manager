import styled from 'styled-components'

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

export const Indicator = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.colors.darkYellow};
  position: absolute;
  left: 0;
  top: 0;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: -2px;
    left: -2px;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`
