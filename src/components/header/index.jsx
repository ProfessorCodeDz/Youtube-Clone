import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyles>
      <h1>&lt; YouTube /&gt;</h1>
      <p>riadz.pages.dev</p>   
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  p {
    font-size: 25px;
    color: #c2cbdb;
  }
  h1 {
    color: #ff4757;
  }
`