import { styled } from 'styled-components'
import { Card } from '../../components/Container/styles'
import { Title, Description } from '../../components/Texto/styles'

export const CardSucess = styled(Card)`
  width: 504px;
  height: 520px;
  border-radius: 36px;
  display: block;

  svg {
    width: 64px;
    height: 64px;
    margin-left: 64px;
    margin-top: 48px;
    margin-bottom: 0px;
  }
`

export const TitleSucess = styled(Title)`
  margin-top: 38px;
  white-space: normal;
`

export const DescriptionSucess = styled(Description)`
  width: 376px;

  span {
    font-weight: bold;
  }
`

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
`
