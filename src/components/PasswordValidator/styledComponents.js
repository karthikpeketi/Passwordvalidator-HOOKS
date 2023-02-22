// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  height: 50%;
  width: 50%;
  background-color: #475569;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 30px;
`
export const Paragraph = styled.p`
  color: white;
  font-size: 15px;
`
export const InputElement = styled.input`
  width: 80%;
  height: 38px;
  border: none;
  padding: 8px;
  outline: none;
`
export const ErrorParagraph = styled.p`
  color: red;
  font-size: 15px;
`
