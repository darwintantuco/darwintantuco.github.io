import React from 'react'
import SEO from '../components/SEO'

const Index = (): JSX.Element => (
  <div>
    <SEO />
    <main>
      <p> Hi there!</p>
      <p>
        {`I'm `}
        <strong>Darwin Tantuco</strong>
        {`, a software developer from Manila, Philippines.`}
      </p>
      <p>{`I build web applications using elixir, javascript and ruby.`}</p>
      <p> I like working on both backend and frontend.</p>
      <p> I enjoy building tools and have a soft spot for automation.</p>
      <p> {`I'm an avid open-source contributor as well.`}</p>

      <p> {`Let's connect.`}</p>
      <ul>
        <li>
          <a href='mailto:dcrtantuco@gmail.com'>email</a>
        </li>
        <li>
          <a href='https://github.com/darwintantuco'>github</a>
        </li>
        <li>
          <a href='https://linkedin.com/in/darwintantuco'>linkedin</a>
        </li>
      </ul>
    </main>
  </div>
)

export default Index
