// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  Paragraph,
  InputElement,
  ErrorParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPasswordStatus] = useState('')

  const isStrongPassword = password.length >= 8

  const onChangeValue = event => {
    setPasswordStatus(event.target.value)
  }
  return (
    <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement onChange={onChangeValue} value={password} />
        <ErrorParagraph>
          {!isStrongPassword && 'Your password must be at least 8 characters'}
        </ErrorParagraph>
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
