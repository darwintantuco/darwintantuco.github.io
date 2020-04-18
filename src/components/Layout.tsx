import React from 'react'

import '../base.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => <>{children}</>

export default Layout
