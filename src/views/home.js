import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Implementation Officer</title>
        <meta property="og:title" content="Product Implementation Officer" />
      </Helmet>
    </div>
  )
}

export default Home
