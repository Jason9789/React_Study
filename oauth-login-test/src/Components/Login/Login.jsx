import React from 'react'
import Logo from '../Template/Logo'
import Template from '../Template/Template'
import GoogleButton from './GoogleButton'
import styled from 'styled-components'

const EmailInput = styled.input.attrs(props => ({ placeholder: "이메일", type: "email"}))`
height: 50px;

margin-left: 40px;
margin-top: 10px;
margin-right: 40px;
margin-botton: 10px;

padding-left: 30px;

border-radius: 8px;
border: 1px solid #CCCCCC;
`

const PasswordInput = styled.input.attrs(props => ({ placeholder: "비밀번호", type: "password"}))`
height: 50px;

margin-left: 40px;
margin-top: 20px;
margin-right: 40px;

padding-left: 30px;

border-radius: 8px;
border: 1px solid #CCCCCC;

`

const LoginButton = styled.button.attrs({text: "로그인"})`
height: 50px;

margin-left: 40px;
margin-top: 20px;
margin-right: 40px;

border-radius: 8px;
border: 1px solid white;

background-color: #53A8E7;

font-size: 20px;
font-weight: 600;
display: center;

color: #FFFFFF;
`

export default function Login() {
  return (
    <>
      <Template>
        <Logo />
        <EmailInput />
        <PasswordInput />
        <LoginButton>로그인</LoginButton>

        <GoogleButton />
      </Template>
    </>

  )
}
