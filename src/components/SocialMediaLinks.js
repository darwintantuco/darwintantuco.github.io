import React from 'react'

import styles from './SocialMediaLinks.module.scss'

const SocialMediaLinks = () => (
  <ul className={styles.container}>
    <li>
      <a href='mailto:dcrtantuco@gmail.com'>email</a>
    </li>
    <li>
      <a href='https://github.com/dcrtantuco'>github</a>
    </li>
    <li>
      <a href='https://linkedin.com/in/dcrtantuco'>linkedin</a>
    </li>
    <li>
      <a href='https://twitter.com/darwintantuco'>twitter</a>
    </li>
  </ul>
)

export default SocialMediaLinks
