import React from 'react'
import Footer from '~Components/layout/footer'
import Header from '~Components/layout/header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
