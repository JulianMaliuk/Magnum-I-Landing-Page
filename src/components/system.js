import React, {useState} from 'react';
import { Col, Image, Row, Spinner, Badge, Nav, Button, Collapse } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
import { FaBook } from 'react-icons/fa';

import './system.scss'
import { toUAH } from './systems';

const System = ({id, img, title, iConf, description, mainFunctions, 
  securFunctions, antiTheftFunctions, notificationFunctions, additionalFeatures, 
  setOptions, manualUrl, price, shopUrl, iGPSActivation }) => {
    return (
    <div id={`MagnuM-${id}`} className='pb-4 system-info'>
      <Fade>
        <Row>
          <Col md={12} className='text-center mb-3'>
            <Nav.Link href={`#MagnuM-${id}`}>
              <h3 className='system-title'>
                <FormattedMessage id='GSM_GPSCarAlarmSystem' /><br /> 
                <span className='f-magnum'>MagnuM </span> 
                <span style={{color: '#ff4040', fontWeight: 'bold'}}> {title}</span>
              </h3>
            </Nav.Link>
            {
              price != null
              ? <h5>
                  <FormattedMessage id='Price' />&nbsp;
                  <Badge variant="success">{price}&nbsp;
                    <FormattedMessage id='uah' /> 
                  </Badge>&nbsp;
                  <FormattedMessage id='withVAT' /> 
                </h5> 
              : <Spinner animation="grow" variant="success" />
            }
             
          </Col>
        </Row>
        <Row>
          <Col md={5} >
            <Zoom timeout={500}>
              <Image src={img} rounded fluid className='mr-0 mb-3' style={{border: '1px solid #1b1b1b'}} />
            </Zoom>
          </Col>
          <Col md={7} >
            <ul style={{listStyle: 'none', lineHeight: '29px', paddingLeft: '0px'}} className='list-with-i'>
              { iConf.info && <li><FormattedHTMLMessage id='ReliableProtectionOfYourCar.1' /></li> }
              { iConf.gpsOption && <li><FormattedHTMLMessage id='andGPSModuleActivation' /></li> }
              { iConf.gps && <li><FormattedHTMLMessage id='ReliableProtectionOfYourCar.2' /></li> }
              { iConf.engblock && <li><FormattedHTMLMessage id='ReliableProtectionOfYourCar.3' /></li> }
              { iConf.sensors && <li><FormattedHTMLMessage id='ReliableProtectionOfYourCar.4' /></li> }
              { iConf.identification && <li><FormattedHTMLMessage id='ReliableProtectionOfYourCar.5' /></li> }
              { iConf.prolock && <li><FormattedHTMLMessage id='ReliableProtectionOfYourCar.6' /></li> }
              { iConf.phoneOrKeychain && <li><FormattedHTMLMessage id='SecurityManagementIsSimple.1' /></li> }
              { iConf.mobApp && <li><FormattedHTMLMessage id='SecurityManagementIsSimple.2' /></li> }
              { iConf.autostart && <li><FormattedHTMLMessage id='SecurityManagementIsSimple.3' /></li> }
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='mb-4 mt-4 mt-md-3'>
              <ul className='func-list'>
                {description.map(item => <li key={item}><FormattedMessage id={`shortDescription.${item}`} /></li>)}
              </ul>
            </div>

            <ToggleBlock key title='MainFunctionsOfTheSystem.0'>
              <ul className='func-list'>
                {mainFunctions.map(item => <li key={item}><FormattedMessage id={`MainFunctionsOfTheSystem.${item}`} /></li>)}
              </ul>
            </ToggleBlock>

            <ToggleBlock title='SecurityFunctionsOfTheSystem.0'>
              <ul className='func-list'>
                {securFunctions.map(item => <li key={item}><FormattedMessage id={`SecurityFunctionsOfTheSystem.${item}`} /></li>)}
              </ul>
            </ToggleBlock>

            <ToggleBlock title='AntiTheftFunctions.0'>
              <ul className='func-list'>
                {antiTheftFunctions.map(item => <li key={item}><FormattedMessage id={`AntiTheftFunctions.${item}`} /></li>)}
              </ul>
            </ToggleBlock>

            <ToggleBlock title='NotificationFunctions.0'>
              <ul className='func-list'>
                {notificationFunctions.map(item => <li key={item}><FormattedMessage id={`NotificationFunctions.${item}`} /></li>)}
              </ul>
            </ToggleBlock>

            <ToggleBlock title='AdditionalFeatures.0'>
              <ul className='func-list'>
                {additionalFeatures.map(item => <li key={item}><FormattedMessage id={`AdditionalFeatures.${item}`} /></li>)}
              </ul>
            </ToggleBlock>

            {
              iGPSActivation && <ToggleBlock title='IGPSActivation.0'>
                <div style={{ fontSize: '.95rem' }}>
                  <p style={{ fontSize: '.95rem', paddingLeft: '12px' }}>
                    <FormattedHTMLMessage 
                      id='IGPSActivation.1'
                      values={{ price: toUAH(iGPSActivation.course, 60) }} 
                    />
                       <br />
                    <FormattedMessage id='IGPSActivation.2' />
                  </p>

                  <ol className='func-list' style={{ paddingLeft: '25px' }}>
                    <li><FormattedMessage id={`IGPSActivation.3`} /></li>
                    <li><FormattedMessage id={`IGPSActivation.4`} /></li>
                    <li><FormattedMessage id={`IGPSActivation.5`} /></li>
                    <li><FormattedMessage id={`IGPSActivation.6`} /></li>
                      <ToggleBlock title='EnterProgrammingMode.0'>
                        <ol className='func-list' style={{ paddingLeft: '25px' }}>
                          <li><FormattedMessage id={`EnterProgrammingMode.1`} /></li>
                          <li><FormattedMessage id={`EnterProgrammingMode.2`} /></li>
                          <li><FormattedMessage id={`EnterProgrammingMode.3`} /></li>
                          <li><FormattedMessage id={`EnterProgrammingMode.4`} /></li>
                        </ol>
                      </ToggleBlock>
                    <li><FormattedMessage id={`IGPSActivation.7`} /></li>
                    <li><FormattedMessage id={`IGPSActivation.8`} /></li>
                    <li><FormattedMessage id={`IGPSActivation.9`} /></li>
                  </ol>
                </div>
              </ToggleBlock>
            }

            <ToggleBlock title='SetOptions.0'>
              <ul className='func-list'>
                {setOptions.map(item => <li key={item}><FormattedHTMLMessage id={`SetOptions.${item}`} /></li>)}
              </ul>
            </ToggleBlock>
          </Col>
        </Row>
        <Row>
          <Col md='6' className='pt-2 text-center text-md-left'>
            <a className='c-link' href={manualUrl} target='_blank' rel="noreferrer"><FaBook /> <FormattedMessage id='ElectronicVersionOfTheInstructions' /></a>
          </Col>
          <Col md='6' className='text-center text-md-right pt-3 pt-md-0'>
            <a href={shopUrl} target='_blank' rel="noreferrer">
              <Button variant="outline-info"><FormattedMessage id='Buy' /></Button>
            </a>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};

const ToggleBlock = ({title, children}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h6
        className='func-list-header pb-1 pt-1'
        onClick={() => setOpen(!open)}
        onKeyDown={()=> {}}
        aria-controls={title}
        // aria-expanded={open}
      >
        <span style={{paddingRight: '8px'}}> {!open ? '+' : '-'}</span>  
        <FormattedMessage id={title} />
      </h6>

      <Collapse in={open}>
        {children}
      </Collapse>
    </>
  )
}

export default System;
