import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = (): JSX.Element => (
  <Helmet
    defer={false}
    defaultTitle={
      'Darwin Tantuco | Elixir, Javascript and Ruby developer from Manila, Philippines'
    }
  >
    <html lang='en' />
    <link rel='canonical' href={'https://darwintantuco.com'} />
    <meta
      name='description'
      content='I build web applications using elixir, javascript and ruby.'
    />
    <meta
      name='viewport'
      content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
    />

    <meta property='og:title' content={'Darwin Tantuco'} />
    <meta property='og:url' content={'https://darwintantuco.com'} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en' />
    <meta property='og:site_name' content={'Darwin Tantuco'} />
  </Helmet>
)

export default SEO
