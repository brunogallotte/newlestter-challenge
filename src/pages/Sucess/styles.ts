import { styled } from 'styled-components'
import { Box, Card } from '../../components/Container/styles'
import { Title, Description } from '../../components/Texto/styles'

export const CardSucess = styled(Card)`
  width: 504px;
  height: 520px;
  border-radius: 36px;
  display: block;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 327px;
    height: 304px;
    margin-bottom: 256px;
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

  @media (max-width: 768px) {
    position: fixed;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }
`
export const BoxContainer = styled(Box)`
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`
