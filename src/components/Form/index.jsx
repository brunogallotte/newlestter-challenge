import { BoxForm, Button, Input, Label } from './styles'

export const Form = () => {
  return (
    <BoxForm>
      <Label>Email Adress</Label>
      <Input type="email" placeholder="example@company.com" required />
      <Button type="submit">Subscribe to monthly newlestter</Button>
    </BoxForm>
  )
}
