import React from 'react'
import Footer from './footer'
import Header from './header'

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
