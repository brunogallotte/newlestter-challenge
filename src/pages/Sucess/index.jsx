import EstiloGlobal from '../../styles'
import { BoxButton, BoxContainer, CardSucess, TitleSucess } from './styles'
import { Box } from '../../components/Container/styles'
import { ImageSucess } from '../../components/Images'
import { DescriptionSucess } from './styles'
import { Button } from '../../components/Form/styles'

const Sucess = () => (
  <BoxContainer>
    <EstiloGlobal />
    <CardSucess>
      <ImageSucess />
      <TitleSucess>Thanks for subscribing!</TitleSucess>
      <DescriptionSucess>
        A confirmation email has been sent to <span>ash@loremcompany.com</span>.
        Please open it and click the button inside to confirm your subscription.
      </DescriptionSucess>
      <BoxButton>
        <Button>Dismiss message</Button>
      </BoxButton>
    </CardSucess>
  </BoxContainer>
)

export default Sucess
