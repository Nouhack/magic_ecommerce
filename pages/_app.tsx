
import Script from "next/script";
import { useState } from 'react';

import '../styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
// import components
import Footer from '../components/Footer';




import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <div className='md:px-4 '>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
