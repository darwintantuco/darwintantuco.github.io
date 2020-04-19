import React from 'react'

import '../styles/base.scss'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.container}>{children}</div>
)

export default Layout
