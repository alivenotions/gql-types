import React from 'react'
import Head from 'next/head'
import { App } from '../components/App'
import fetch from 'isomorphic-unfetch'
import { First } from '../components/First'
import { Second } from '../components/Second'

const Home = ({data}: any) => {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Hello World</div>
      <App />
      <First />
      <Second />
    </div>
  )
}

Home.getInitialProps = async ({req}: any) => {
  const res = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: `{
      description
      posts {
        id
        title
        content
      }
      authors{
        name
        id
      }
      author(id:1) {
        name
      }
    }`})
    
  })

  // console.log(res)
  const json = await res.json()

  return {data: json}
}

export default Home
