import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import favicon from '../images/favicon.ico'
import '../styles/global.css'


const IndexPage = () => {
  return (
		<div className="container">
			<head>
				<title>Portfolio | Minsu Kim</title>
				<Helmet>
					<link rel="icon" href={favicon} />
				</Helmet>
			</head>

			<Layout>
				I am a good-looking page, right?
			</Layout>
    </div>
  )
}

export default IndexPage
