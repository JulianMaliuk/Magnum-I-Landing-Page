import React, {useState} from "react"
import { Container, Col, Row, Button, Nav } from 'react-bootstrap';
import { BiCheck } from 'react-icons/bi';
import Fade from 'react-reveal/Fade';

import carKey from '../images/car-key.svg';
import carKeyBlack from '../images/car-key-black.svg';
import carEngine from '../images/car-engine.svg';
import carEngineNotSupport from '../images/car-engine-not-support.svg';
import gps from '../images/gps.svg';
import gpsNotSupport from '../images/gps-not-support.svg';
import './selection-system.scss'
import { FormattedMessage } from "gatsby-plugin-intl";

const SelectionSystem = () => {
  const [isSelectAddKeys, setAddKeys] = useState(false);
  const [isSelectAutoStart, setAutoStart] = useState(false);
  const [isSelectGPS, setGPS] = useState(false);

  return (
    <Container className="selection-system py-5 my-5 text-center" id='selection-system'>
      <h3 className="pb-5"><FormattedMessage id='ChooseReliableProtectionWithUs' /></h3>

      <Row>
        <Col xs={12} md={4} className="mb-5 pb-4 pb-sm-0">
          <Fade bottom>
            <h5 className="mb-md-5"><FormattedMessage id='SecurityManagementIsCarriedOut.0' /></h5>
            <Row className={`sel-item d-flex align-items-center p-2`} onClick={() => setAddKeys(false)}>
              <Col sm={4} xs={3} ><img src={carKeyBlack} alt='' height="50px" className="d-flex justify-content-start" style={{transform: 'rotate(90deg)'}} /></Col>
              <Col sm={6} xs={6} className="align-self-center">1.	<FormattedMessage id='SecurityManagementIsCarriedOut.1' /></Col>
              <Col sm={2} xs={3}>{!isSelectAddKeys && <BiCheck color='#49ff49' size='2.5em' />}</Col>
            </Row>
            <hr style={{
              borderTop: '1px solid rgb(255 255 255 / 11%)',
              width: '100%'
            }} />
            <Row className={`sel-item d-flex align-items-center p-2`} onClick={() => setAddKeys(true)}>
              <Col sm={4} xs={3} ><img src={carKey} alt='' height="50px" className="d-flex justify-content-start" style={{transform: 'rotate(90deg)'}} /></Col>
              <Col sm={6} xs={6} className="align-self-center">2.	<FormattedMessage id='SecurityManagementIsCarriedOut.2' /></Col>
              <Col sm={2} xs={3}>{isSelectAddKeys && <BiCheck color='#49ff49' size='2.5em' />}</Col>
            </Row>
          </Fade>
        </Col>
        <Fade bottom></Fade>
        <Col xs={12} md={4} className="mb-5 pb-4 pb-sm-0">
          <Fade bottom>
            <h5 className="mb-md-5"><FormattedMessage id='AutomaticAndRemoteEngineStart.0' /></h5>
            <Row className={`sel-item d-flex align-items-center p-2`} onClick={() => setAutoStart(true)}>
              <Col sm={4} xs={3} ><img src={carEngine} alt='' height="50px" className="d-flex justify-content-start" /></Col>
              <Col sm={6} xs={6} className="align-self-center">1.	<FormattedMessage id='AutomaticAndRemoteEngineStart.1' /></Col>
              <Col sm={2} xs={3}>{isSelectAutoStart && <BiCheck color='#49ff49' size='2.5em' />}</Col>
            </Row>
            <hr style={{
              borderTop: '1px solid rgb(255 255 255 / 11%)',
              width: '100%'
            }} />
            <Row className={`sel-item d-flex align-items-center p-2`} onClick={() => setAutoStart(false)}>
              <Col sm={4} xs={3} ><img src={carEngineNotSupport} alt='' height="50px" className="d-flex justify-content-start" /></Col>
              <Col sm={6} xs={6} className="align-self-center">2. <FormattedMessage id='AutomaticAndRemoteEngineStart.2' /></Col>
              <Col sm={2} xs={3}>{!isSelectAutoStart && <BiCheck color='#49ff49' size='2.5em' />}</Col>
            </Row>
          </Fade>
        </Col>
        <Fade bottom></Fade>
        <Col xs={12} md={4} className="mb-5">
          <Fade bottom>
            <h5 className="mb-md-5"><FormattedMessage id='CarLocationAndTracking.0' /></h5>
            <Row className={`sel-item d-flex align-items-center p-2`} onClick={() => setGPS(true)}>
              <Col sm={4} xs={3} ><img src={gps} alt='' height="50px" className="d-flex justify-content-start" /></Col>
              <Col sm={6} xs={6} className="align-self-center">1.	<FormattedMessage id='CarLocationAndTracking.1' /></Col>
              <Col sm={2} xs={3}>{isSelectGPS && <BiCheck color='#49ff49' size='2.5em' />}</Col>
            </Row>
            <hr style={{
              borderTop: '1px solid rgb(255 255 255 / 11%)',
              width: '100%'
            }} />
            <Row className={`sel-item d-flex align-items-center p-2`} onClick={() => setGPS(false)}>
              <Col sm={4} xs={3} ><img src={gpsNotSupport} alt='' height="50px" className="d-flex justify-content-start" /></Col>
              <Col sm={6} xs={6} className="align-self-center">2.	<FormattedMessage id='CarLocationAndTracking.2' /></Col>
              <Col sm={2} xs={3}>{!isSelectGPS && <BiCheck color='#49ff49' size='2.5em' />}</Col>
            </Row>
          </Fade>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
        <Nav.Link href={`#MagnuM-${getSystemBySelect(isSelectAddKeys, isSelectAutoStart, isSelectGPS)}`}>
          <Button variant="outline-info" size="lg"><FormattedMessage id='Next' /></Button>
        </Nav.Link>
        </Col>
      </Row>

    </Container>
  );
}

const getSystemBySelect = (addKeys, autoStart, gps) => {
  if(addKeys) {
    if(autoStart || gps) return 'iS80';
    return 'iL20';
  } else {
    if(autoStart || gps) return 'iS40';
    return 'iL10';
  }
}
  
export default SelectionSystem