import React from 'react'

import Layout from '../components/Layout'
import styles from './404.module.scss'

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout>
      <h1 className={styles.code}>404 </h1>
      <p className={styles.text}>Page not found </p>
    </Layout>
  )
}

export default NotFoundPage
