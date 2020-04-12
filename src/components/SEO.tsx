import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => (
  <Helmet
    defer={false}
    defaultTitle={'Darwin Christopher Tantuco - Manila, Philippines'}
  >
    <html lang='en' />
    <link rel='canonical' href={'https://darwintantuco.com'} />
    <meta
      name='description'
      content="I'm a web developer, fiddling with javascript, ruby and elixir."
    />
    <meta
      name='viewport'
      content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
    />

    <meta property='og:title' content={'Darwin Christopher Tantuco'} />
    <meta property='og:url' content={'https://darwintantuco.com'} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en' />
    <meta property='og:site_name' content={'Darwin Christopher Tantuco'} />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content={'@darwintantuco'} />
  </Helmet>
)

export default SEO
