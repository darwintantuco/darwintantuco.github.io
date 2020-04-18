import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMediaLinks from '../components/SocialMediaLinks'

import styles from './index.module.scss'

const Index = (): JSX.Element => (
  <Layout>
    <SEO />

    <main className={styles.container}>
      <p>{"I'm a web developer, fiddling with javascript, ruby and elixir."}</p>
      <p>{'I like building tools and have a soft spot for automation.'}</p>
      <p>{"I'm an avid open-source contributor as well."} </p>
      <p>{"Let's connect."}</p>
      <SocialMediaLinks />
    </main>
  </Layout>
)

export default Index
