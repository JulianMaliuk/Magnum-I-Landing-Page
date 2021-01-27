import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
import { Container, Image, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './reliable-protection.scss'
import reliableProtectionImg from '../images/reliable-protection.jpg'
import securityManagementnImg from '../images/security-management.jpg'

const ReliableProtection = () => {
  return (
    <div id='reliable-protection' className='py-5'>
      <div className="block-overlay" style={{opacity: '0.85'}}></div>
      <Container>
        <Fade>
          <Row>
            <Col md={12} className='text-center mb-3'>
              <h3><FormattedMessage id='ReliableProtectionOfYourCar.0' /></h3>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Image src={reliableProtectionImg} rounded fluid className='d-block d-sm-none mb-3' />
              <Image src={reliableProtectionImg} rounded className='float-md-left d-none d-md-block mr-5 mb-3' style={{width: '35%'}} />
              <ul style={{lineHeight: '28px'}} className='list-with-i'>
                <li key='0'><FormattedHTMLMessage id='ReliableProtectionOfYourCar.1' /></li>
                <li key='1'><FormattedHTMLMessage id='ReliableProtectionOfYourCar.2' /></li>
                <li key='2'><FormattedHTMLMessage id='ReliableProtectionOfYourCar.3' /></li>
                <li key='3'><FormattedHTMLMessage id='ReliableProtectionOfYourCar.4' /></li>
                <li key='4'><FormattedHTMLMessage id='ReliableProtectionOfYourCar.5' /></li>
                <li key='5'><FormattedHTMLMessage id='ReliableProtectionOfYourCar.6' /></li>
              </ul>
            </Col>
          </Row>

          <Row className='pt-5'>
            <Col md={12} className='text-center mb-3'>
              <h3><FormattedHTMLMessage id='SecurityManagementIsSimple.0' /></h3>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Image src={securityManagementnImg} rounded fluid className='d-block d-sm-none mb-3' />
              <Image src={securityManagementnImg} rounded className='float-md-left d-none d-md-block mr-5 mb-3' style={{width: '35%'}} />
              <ul style={{lineHeight: '28px'}} className='list-with-i'>
                <li key='0'><FormattedHTMLMessage id='SecurityManagementIsSimple.1' /></li>
                <li key='1'><FormattedHTMLMessage id='SecurityManagementIsSimple.2' /></li>
                <li key='2'><FormattedHTMLMessage id='SecurityManagementIsSimple.3' /></li>
              </ul>
            </Col>
          </Row>      
        </Fade>
      </Container>
    </div>
  );
};

export default ReliableProtection;