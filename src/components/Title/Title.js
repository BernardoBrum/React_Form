import React from 'react'
import { TitleStyled } from './Title.styled'

export const Title = ({text}) => {
  return (
    <div>
        <TitleStyled>{text}</TitleStyled>
    </div>
  )
}

