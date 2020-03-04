import React from 'react'
import { Link, Typography } from '@material-ui/core'
import styled from 'styled-components'

type StyledLinkProps = {
  href: string
  path: string
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: #ff9800;
  }

  // TODO add theme colors
  color: ${props => (props.path === props.href ? '#ff9800' : '#FFF1D0')};
`

const Section = (props: any) => {
  const { href, path, text, variant } = props

  return (
    <>
      <Typography variant={variant}>
        <StyledLink href={href} path={path}>
          {text}
        </StyledLink>
      </Typography>
    </>
  )
}

export default Section
