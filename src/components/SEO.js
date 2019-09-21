import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => (
  <Helmet defer={false} defaultTitle={'Darwin Christopher Tantuco'}>
    <html lang='en' />
    <link rel='canonical' href={'https://dcrtantuco.com'} />
    <meta
      name='viewport'
      content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
    />

    <meta property='og:title' content={'Darwin Christopher Tantuco'} />
    <meta property='og:url' content={'https://dcrtantuco.com'} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en' />
    <meta property='og:site_name' content={'Darwin Christopher Tantuco'} />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content={'@dcrtantuco'} />
  </Helmet>
)

export default SEO
