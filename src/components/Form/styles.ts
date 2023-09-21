import { styled } from 'styled-components'

export const BoxForm = styled.form`
  width: 376px;
  height: 162px;
  margin-left: 64px;

  @media (max-width: 768px) {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
`

export const BoxLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  line-height: 150%;

  @media (max-width: 768px) {
    text-align: left;
  }
`

export const ValidMail = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: var(--Vermellion, #ff6155);
  line-height: 150%;
  text-align: right;
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
  margin-left: 8px;

  &:focus {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 327px;
    height: 56px;
    margin-left: 0;
    margin-bottom: 24px;
  }
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

  @media (max-width: 768px) {
    margin: 0;
    width: 327px;
    height: 56px;
  }
`
