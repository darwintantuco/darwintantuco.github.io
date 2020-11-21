import React from 'react'
import SEO from '../components/SEO'

const Index = (): JSX.Element => (
  <div className=''>
    <SEO />
    <main className='mx-8 my-16 text-xl text-gray-500 md:m-16 md:my-32'>
      <p className='mb-4'> Hi there!</p>
      <p className='mb-4'>
        {`I'm `}
        <span className='font-bold'>Darwin Tantuco</span>
        {`, a software developer from Manila, Philippines.`}
      </p>
      <p>{`I build web applications using elixir, javascript and ruby.`}</p>
      <p> I like working on both backend and frontend.</p>
      <p> I enjoy building tools and have a soft spot for automation.</p>
      <p className='mb-8'> {`I'm an avid open source contributor as well.`}</p>

      <p className='mb-4'> {`Let's connect.`}</p>
      <ul className='text-lg'>
        <li>
          <a className='hover:text-gray-600' href='mailto:dcrtantuco@gmail.com'>
            email
          </a>
        </li>
        <li>
          <a
            className='hover:text-gray-600'
            href='https://github.com/darwintantuco'
          >
            github
          </a>
        </li>
        <li>
          <a
            className='hover:text-gray-600'
            href='https://linkedin.com/in/darwintantuco'
          >
            linkedin
          </a>
        </li>
      </ul>
    </main>
  </div>
)

export default Index
