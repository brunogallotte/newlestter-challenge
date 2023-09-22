import { styled } from 'styled-components'
import { Card } from '../../components/Container/styles'
import { Title, Description } from '../../components/Texto/styles'

export const CardSucess = styled(Card)`
  width: 504px;
  height: 520px;
  border-radius: 36px;
  display: block;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 327px;
    height: 304px;
  }

  div {
    @media (max-width: 768px) {
      display: flex;
      width: 327px;
      justify-content: flex-start;
      background-color: red;
    }

    svg {
      width: 64px;
      height: 64px;
      margin-left: 64px;
      margin-top: 48px;
      margin-bottom: 0px;

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 0;
        justify-content: flex-start;
      }
    }
  }
`

export const TitleSucess = styled(Title)`
  margin-top: 38px;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const DescriptionSucess = styled(Description)`
  width: 376px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 327px;
  }

  span {
    font-weight: bold;
  }
`

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
`
