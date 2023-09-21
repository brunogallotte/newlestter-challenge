import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BoxForm, BoxLabel, Button, Input, Label, ValidMail } from './styles'

export const Form = () => {
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log('Email enviado', email)

    setRegistered(true)
    setError(false)

    navigate('/sucess')
  }

  function verificaEmail() {
    if (registered === false) {
      console.log('e-mail negado')
      setError(true)
    } else {
      console.log('E-mail válido')
    }
  }

  return (
    <BoxForm onSubmit={handleSubmit}>
      <BoxLabel>
        <Label>Email Adress</Label>
        {error && <ValidMail>Valid email required</ValidMail>}
      </BoxLabel>
      <Input
        type="email"
        placeholder="example@company.com"
        required
        value={email}
        onChange={handleEmailChange}
        style={{
          backgroundColor: error ? 'rgba(255, 97, 85, 0.15)' : 'transparent',
          border: error
            ? '1px solid var(--Vermellion, #FF6155)'
            : '1px solid var(--grey-25, rgba(25, 24, 43, 0.25))'
        }}
      />
      <Button type="submit" onClick={verificaEmail}>
        Subscribe to monthly newlestter
      </Button>
    </BoxForm>
  )
}
