import { styled } from 'styled-components'

export const TextBox = styled.div`
  width: 376px;
  height: 244px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    max-width: 327px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h1`
  width: 346px;
  font-size: 56px;
  font-weight: bold;
  margin-top: 97px;
  margin-bottom: 24px;
  margin-left: 64px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 24px;
    margin-left: 0px;
    margin-top: 0px;
    max-width: 327px;
  }
`
export const Description = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin-left: 64px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 327px;
    height: 48px;
  }
`

export const BoxList = styled.ul`
  margin-left: 64px;
  width: 376px;
  height: 92px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 327px;
    margin-bottom: 36px;
  }
`

export const Item = styled.li`
  display: flex;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
    white-space: pre-wrap;
  }

  > svg {
    width: 21px;
    height: 21px;
    margin-right: 16px;
  }
`
