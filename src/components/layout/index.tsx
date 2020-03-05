import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from './Breadcrumbs'
import Footer from './footer'
import Menu from './menu'

interface LayoutProps {
  children: React.ReactNode
}

const StyledChildren = styled.div
`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex: 1 0 auto;
  padding: 5px 15px 5px 15px;
`

const StyledFooter = styled.div
`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex-shrink: 0;
  min-height: 100px;
  padding: 5px 15px 5px 15px;
`

const StyledBreadcrumb = styled.div
`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  padding: 10px 15px 5px 15px;
`


const Layout = ({ children }: LayoutProps) => (
  <>
    <Menu />
    <StyledBreadcrumb>
      <Breadcrumbs />
    </StyledBreadcrumb>
    <StyledChildren>
      {children}
    </StyledChildren>
    <StyledFooter>
      <Footer />
    </StyledFooter>
  </>
)

export default Layout
