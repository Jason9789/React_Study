import React from 'react'
import styled from 'styled-components'

const TemplateBlock = styled.div`
width: 512px;
height: 600px;

position: relative;
background: lightgray;
border: 2px solid black;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.84);

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
