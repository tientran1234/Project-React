import React from 'react'
import Footer from '../home/\bfooter'
import Header from '../home/header'
import Banner from './banner'
import ListLatest from './listLatest'
import MustToWatch from './mustToWatch'

function Genre() {
  return (
    <div>
        <Header/>
        <Banner/>
        <ListLatest/>
        <MustToWatch/>
        <Footer/>
    </div>
  )
}

export default Genre