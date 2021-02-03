import React, { useEffect, useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Container, Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Header from "./header"
import logo from '../images/logo-2.svg';
import './home.scss'

const HomePage = () => {

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, [])

  return <div id="home">
    <div className="block-overlay"></div>
    <Header />
    <Container>
        <div className='text-center home-content'>
          <Fade in={open} mountOnEnter={true} duration={1500}>
            <Nav.Link href='#home'>
              <img
                src={logo}
                height="120"
                className="d-inline-block mb-3 mb-md-4"
                alt=""
              />
            </Nav.Link>
          </Fade>
          <Fade bottom in={open} mountOnEnter={true} delay={300}>
            <h1 style={{fontSize: '2rem'}}><FormattedMessage id="CarAlarms" /></h1>
            <h1><span className='f-magnum text-decor'>MagnuM</span></h1>
            <h1 style={{fontSize: '2rem'}}><span className='i'>i</span> <FormattedMessage id="SeriesOf2021" /></h1>
            <hr style={{borderColor: '#303030'}} className='my-4' />
          </Fade>
          <Fade left in={open} mountOnEnter={true} delay={600}>
            <h3 style={{fontSize: '1.5rem'}}><FormattedMessage id='NinePointsAbove' /> <span className='i' style={{fontSize: '46px'}}>i</span> <FormattedMessage id='forCarProtection' /></h3>
          </Fade>
        </div>
    </Container>
  </div>
}
export default HomePage