// Style your components here
import styled from 'styled-components'

export const Label = styled.label`
  font-size: 12px;
  font-family: 'Open Sans';
  color: #7e858e;
`
export const Input = styled.input`
  height: 10%;
  width: 100%;
  border: solid #7e858e 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
  margin-top: 5px;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 32px;
  font-family: 'Open Sans';
  font-weight: bold;
`
export const Option = styled(Input)`
  margin-bottom: 15px;
`
export const Button = styled.button`
  height: 30px;
  background-color: #0b69ff;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  width: 20%;
  padding: 5px;
`
export const Select = styled(Input)`
  margin-top: 5px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  background-image: ${props => `${props.bgColor}`};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 50%;
`
export const Paragraph = styled.p`
color:#ffffff;
font-size:${props => props.size}
font-family:"Open Sans"

`
