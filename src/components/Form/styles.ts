import { styled } from 'styled-components'

export const BoxForm = styled.div`
  width: 376px;
  height: 162px;
  margin-left: 64px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  line-height: 150%;
`

export const Input = styled.input`
  width: 376px;
  height: 56px;
  font-size: 16px;
  opacity: 0.5;
  margin-bottom: 24px;
  margin-top: 8px;
  padding-left: 24px;
  border-radius: 8px;
  border: 1px solid var(--grey-25, rgba(25, 24, 43, 0.25));
`

export const Button = styled.button`
  width: 376px;
  height: 56px;
  font-size: 16px;
  font-weight: bold;
  line-height: 150%;
  color: #fff;
  background-color: #242742;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(
      --Gradient-1,
      linear-gradient(204deg, #ff6a3a 0%, #ff527b 100%)
    );
    box-shadow: 0px 16px 32px 0px rgba(255, 97, 85, 0.5);
  }
`
