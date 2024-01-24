import React from 'react'
import Footer from '../home/\bfooter'
import Header from '../home/header'
import Breadcrumbs from './breadcrumbs'
import FormContact from './formContact'

function Contact() {
  return (
    <div>
        <Header/>
        <Breadcrumbs/>
        <FormContact/>
        <Footer/>
    </div>
  )
}

export default Contact