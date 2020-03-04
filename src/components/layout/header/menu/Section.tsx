import { Link, Theme, Typography } from '@material-ui/core'
import { Variant } from '@material-ui/core/styles/createTypography'
import React from 'react'
import styled from 'styled-components'

interface StyledLinkProps {
  href: string
  path: string
  theme: Theme
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
    color: ${({ theme }) => theme.palette.primary.main};
  }

  color: ${props =>
    props.path === props.href
      ? props.theme.palette.primary.main
      : props.theme.palette.primary.light};
`

interface SectionProps {
  href: string
  path: string
  text: string
  variant: Variant
}

const Section = ({ href, path, text, variant }: SectionProps) => {
  return (
    <Typography variant={variant}>
      <StyledLink href={href} path={path}>
        {text}
      </StyledLink>
    </Typography>
  )
}

export default Section
