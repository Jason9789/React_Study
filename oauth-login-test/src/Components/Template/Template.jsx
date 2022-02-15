import React from 'react'
import styled from 'styled-components'

const TemplateBlock = styled.div`
width: 512px;
height: 600px;

position: relative;
background: white;
border: 0.5px solid black;
border-radius: 16px;
box-shadow: 20px 22px 47px 12px rgba(0, 0, 0, 0.25);

margin: 0 auto;

margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`

export default function Template({ children }) {
  return (
    <TemplateBlock>
      { children }
    </TemplateBlock>
  )
}
