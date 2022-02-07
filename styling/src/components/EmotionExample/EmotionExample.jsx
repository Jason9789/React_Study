/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const color = 'white'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export default function EmotionExample() {
  return (
    <>
    <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
    >
    Hover to change color.
  </div>
    
      <Button>Hello</Button>
    </>
  );
}
