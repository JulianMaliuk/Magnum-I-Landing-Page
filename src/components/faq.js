import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './faq.scss'

const Faq = () => {
  return (
    <Container id='faq' className='faq py-5'>
      <Fade>
        <h3 className="pb-4 text-center">Типові запитання</h3>
      </Fade>

      <Fade left>
        <Accordion defaultActiveKey="-1">
          <Fade left></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <FormattedMessage id='DeliveryOfTheOrder.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className='func-list'>
                  <li><FormattedMessage id='DeliveryOfTheOrder.1' /></li>
                  <li><FormattedMessage id='DeliveryOfTheOrder.2' /></li>
                  <li><FormattedMessage id='DeliveryOfTheOrder.3' /></li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Fade left timeout={100}></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <FormattedMessage id='OrderPayment.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <em><FormattedMessage id='OrderPayment.1' /></em>
                <ul className='func-list'>
                  <li key='0'><FormattedMessage id='OrderPayment.2' /></li>
                  <li key='1'><FormattedMessage id='OrderPayment.3' /></li>
                  <li key='2'><FormattedMessage id='OrderPayment.4' /></li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Fade left timeout={200}></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
            <FormattedMessage id='PromotionsAndSpecialOffers.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
      
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Fade left timeout={300}></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
            <FormattedMessage id='ProductWarranty.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul className='func-list'>
                  <li key='0'><FormattedMessage id='ProductWarranty.1' /></li>
                  <li key='1'><FormattedMessage id='ProductWarranty.2' /></li>
                  <li key='2'><FormattedMessage id='ProductWarranty.3' /></li>
                  <li key='3'><FormattedMessage id='ProductWarranty.4' /></li>
                  <li key='4'><FormattedMessage id='ProductWarranty.5' /></li>
                  <li key='5'><FormattedMessage id='ProductWarranty.6' /></li>
                  <li key='6'><FormattedMessage id='ProductWarranty.7' /></li>
                </ul>  
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Fade left timeout={400}></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
            <FormattedMessage id='InstallationSecuritySystem.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul className='func-list'>
                  <li key='0'><FormattedMessage id='InstallationSecuritySystem.1' /></li>
                  <li key='1'><FormattedMessage id='InstallationSecuritySystem.2' /></li>
                </ul>     
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Fade left timeout={500}></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
            <FormattedMessage id='InformationForInstallers.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <ul className='func-list'>
                  <li key='0'><FormattedMessage id='InformationForInstallers.1' /></li>
                  <li key='1'><FormattedMessage id='InformationForInstallers.2' /></li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Fade left timeout={600}></Fade>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
            <FormattedMessage id='TechnicalQuestions.0' /> <span style={{fontSize: '13px', paddingLeft: '8px'}}> ▼</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <em><FormattedMessage id='TechnicalQuestions.1' /> </em>
                <ol className='func-list'>
                  <li key='0'><FormattedMessage id='TechnicalQuestions.2' /></li>
                  <li key='1'><FormattedMessage id='TechnicalQuestions.3' /></li>
                  <li key='2'><FormattedMessage id='TechnicalQuestions.4' /></li>
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Fade>
    </Container>
  );
};

export default Faq