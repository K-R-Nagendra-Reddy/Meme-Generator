import {Component} from 'react'

import {
  Label,
  Input,
  InputField,
  Form,
  Heading,
  Button,
  MainContainer,
  ImageContainer,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    url: '',
    top: '',
    bottom: '',
    fontSize: 0,
    allOk: false,
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTop = event => {
    this.setState({top: event.target.value})
  }

  onChangeBottom = event => {
    console.log(event.target.value)
    this.setState({bottom: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {top, url, bottom} = this.state
    console.log(top.length)
    if (top !== undefined && bottom !== undefined && url !== undefined && ) {
      this.setState({allOk: true})
    }
    this.setState({allOk: false})
  }

  onChangeFont = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {url, top, bottom, fontSize, allOk} = this.state

    return (
      <MainContainer>
        <Form>
          <Heading>Meme Generator</Heading>
          <InputField>
            <Label htmlFor="url">Image URL</Label>
            <Input type="input" onChange={this.onChangeUrl} id="url" />
          </InputField>
          <InputField>
            <Label htmlFor="top">Top Text</Label>
            <Input type="input" onChange={this.onChangeTop} id="top" />
          </InputField>
          <InputField>
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input type="input" onChange={this.onChangeBottom} id="bottom" />
          </InputField>
          <InputField>
            <Label htmlFor="font">Font Size</Label>
            <select value={fontSize} id="font" onChange={this.onChangeFont}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </InputField>
          <Button type="submit" onSubmit={this.onSubmitForm}>
            Generate
          </Button>
        </Form>
        <>
          {allOk ? (
            <ImageContainer bgColor={url} data-testid="meme">
              <Paragraph size={fontSize}>{top}</Paragraph>
              <Paragraph size={fontSize}>{bottom}</Paragraph>
            </ImageContainer>
          ) : (
            ''
          )}
        </>
      </MainContainer>
    )
  }
}

export default MemeGenerator
