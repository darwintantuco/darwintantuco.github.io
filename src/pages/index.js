import React from 'react'

import '../base.scss'
import styles from './index.module.scss'

const Index = () => (
  <div className={styles.container}>
    <p>{"I'm a web developer, fiddling with javascript, ruby and elixir."}</p>
    <p>I like building tools and have a soft spot for automation.</p>
    <p>{"I'm an avid open-source contributor as well."} </p>
  </div>
)

export default Index
