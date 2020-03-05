import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from './Breadcrumbs'
import Footer from './footer'
import Menu from './menu'
import Sidebar from '~Components/layout/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const StyledBreadcrumb = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  padding: 10px 15px 5px 15px;
`

const StyledContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
`

const StyledChildren = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex: 8 0 auto;
  padding: 5px 15px 5px 15px;
`

const StyledSidebar = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex: 2;
  padding: 5px 15px 50px 15px;
`

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  flex-shrink: 0;
  min-height: 100px;
  padding: 5px 15px 5px 15px;
`

const Layout = ({ children }: LayoutProps) => (
  <>
    <Menu />

    <StyledBreadcrumb>
      <Breadcrumbs />
    </StyledBreadcrumb>

    <StyledContent>
      <StyledChildren>{children}</StyledChildren>
      <StyledSidebar>
        <Sidebar />
      </StyledSidebar>
    </StyledContent>

    <StyledFooter>
      <Footer />
    </StyledFooter>
  </>
)

export default Layout
