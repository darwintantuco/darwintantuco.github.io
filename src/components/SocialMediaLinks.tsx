import React from 'react'

import styles from './SocialMediaLinks.module.scss'

const SocialMediaLinks = (): JSX.Element => (
  <ul className={styles.container}>
    <li>
      <a href='mailto:dcrtantuco@gmail.com'>email</a>
    </li>
    <li>
      <a href='https://github.com/darwintantuco'>github</a>
    </li>
    <li>
      <a href='https://linkedin.com/in/darwintantuco'>linkedin</a>
    </li>
    <li>
      <a href='https://twitter.com/darwintantuco'>twitter</a>
    </li>
  </ul>
)

export default SocialMediaLinks
