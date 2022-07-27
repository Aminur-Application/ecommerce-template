import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';



const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>ecommerce Store</title>
      </Head>
      <header>
        <Navbar />

      </header>
      
      <main>
       {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout