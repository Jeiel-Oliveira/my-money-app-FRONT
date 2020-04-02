import '../commom/template/dependencies'
import React from 'react'

import Header from '../commom/template/header'
import SideBar from '../commom/template/sideBar'
import Footer from '../commom/template/footer'
import Routes from './routes'
import Mensages from '../commom/msg/mensages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
            <div className='content-wrapper'>
                <Routes />
            </div>
        <Footer />        
        <Mensages />
    </div>
)