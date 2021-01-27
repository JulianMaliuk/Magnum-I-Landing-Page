import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Header from "./header"
import logo from '../images/logo-2.svg';
import './home.scss'

const HomePage = () => {

  return <div id="home">
    <div className="block-overlay"></div>
    <Header />
    <Container>
      <Fade>
        <div className='text-center home-content'>
          <img
            src={logo}
            height="120"
            className="d-inline-block mb-3 mb-md-4"
            alt=""
          />
          <h1 style={{fontSize: '2rem'}}><FormattedMessage id="CarAlarms" /></h1>
          <h1><span className='f-magnum text-decor'>MagnuM</span></h1>
          <h1 style={{fontSize: '2rem'}}><span className='i'>i</span> <FormattedMessage id="SeriesOf2021" /></h1>
          <hr style={{borderColor: '#303030'}} className='my-4' />
          <h3 style={{fontSize: '1.5rem'}}><FormattedMessage id='NinePointsAbove' /> <span className='i' style={{fontSize: '46px'}}>i</span> <FormattedMessage id='forCarProtection' /></h3>
        </div>
      </Fade>
    </Container>
  </div>
}
export default HomePage