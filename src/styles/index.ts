import { createGlobalStyle } from 'styled-components'
import { styled } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    color: #242742;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: #36384D;
  }
`

export default EstiloGlobal
