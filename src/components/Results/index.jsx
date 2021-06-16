import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './ResultsElements'

const Results = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>AUSDAV</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Find Your Exam Results Here</FormH1>
              <FormLabel htmlFor='for'>Index Number</FormLabel>
                <FormInput htmlFor='email' required />
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Results
