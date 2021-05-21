import React from 'react';
import styled from 'styled-components'

import SendIcon from './SendIcon'

const SendMessageButtonStyle = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #6EB43F;
  color: #fff;
  border: none !important;
  outline: none;
  svg {
    padding-top: 0px;
    padding-left: 1px;
  }
  :active {
    background-color: #3D7D13 !important;
  }
  :hover {
    background-color: #4A8C1E;
  }
`

export default function SendMessageButton() {
  return (
    <SendMessageButtonStyle>
      <SendIcon height={28} width={19} fill={"#fff"}/>
    </SendMessageButtonStyle>
  );
}