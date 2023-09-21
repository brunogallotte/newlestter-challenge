import { styled } from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  width: 928px;
  height: 641px;
  background-color: #fff;
  border-radius: 16px;

  > svg {
    margin: 24px;
    width: 400px;
    height: 593px;
  }

  div {
    @media (max-width: 768px) {
      display: flex;
      width: 327px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
export const ContainerMobile = styled.div`
  > svg {
    width: 100%;
    height: auto;
  }
`
