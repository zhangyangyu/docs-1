import React from 'react'
import styled from 'styled-components'

import { media } from '../styles/media'

const styles = `
  background: rgba(255,255,255, 0.25);
  border: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  height: auto;
  letter-spacing: .025em;
  line-height: 40px;
  padding: 0 14px;
  text-transform: uppercase;
  transition: all .15s ease;  
  text-align: center;
  font-size: 15px;
  background-size: cover;

  ${media.largePhone`
    width: 100%;
  `}

  &:hover {
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    transform: translateY(1px);
  }
`

export const Button = styled.div`
  ${styles} ${(props) =>
    props.backgroundImage
      ? `background-image: url(${props.backgroundImage});`
      : ''};
`
export const InputButton = styled.input`
  ${styles} ${media.largePhone`
    width: 100%;
  `};
`
