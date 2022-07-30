import 'bootstrap/dist/css/bootstrap.css'
import {Container} from 'react-bootstrap'
import React from 'react'
import { Layout } from '../components'
import '../styles/globals.css'
import {StateContext} from '../context/stateContext'
import {Toaster } from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Container>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </Container>
    </StateContext>
  )
}

export default MyApp
