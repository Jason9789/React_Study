import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import styled from 'styled-components'

const Container = styled.div`
display: center;
flex-flow: column wrap;
width: 100px;
margin-top: 50px;
`

const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
// const clientId = "741401593888-bg6jqol950ft4jf4tqtsaq83e7bt5ijn.apps.googleusercontent.com"

console.log(REACT_APP_GOOGLE_API_KEY)

class GoogleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      provider: '',
    }
  }

  // Google Login
  responseGoogle = (res) => {
    console.log(res)
  }

  // Login Fail
  responseFail = (err) => {
    console.error(err)
  }

  render() {
    return (
      <Container>
        <GoogleLogin
          clientId={REACT_APP_GOOGLE_API_KEY}
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
          />
      </Container>
    )
  }
}

export default GoogleButton