import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { FaFacebookSquare, FaGlobe } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Contacts = () => {
  return (
    <div style={{backgroundColor: '#060213'}} className='py-5' id='contacts'>
      <Container>
        <Row>
          <Col className='text-center pb-5'>
            <h3><FormattedMessage id='Contacts' /></h3>
          </Col>
        </Row>
        <Row>
          <Col md='6' lg='4' className='px-4'>
            <h5 className='text-center'><FormattedMessage id='SalesDepartmentPhone.title' />:</h5>
            <div className='mt-3 mb-5 p-3' style={{border: '1px solid #150a33', borderRadius: '10px'}}>
              <FiPhoneCall size='1.5em' style={{color: '#4adc4a', float: 'left', marginRight: '10px'}} />
              <p>(000) 000-00-00</p>
              <em><FormattedMessage id='SalesDepartmentPhone.operatingMode' /></em>
            </div>

            <h5 className='text-center'><FormattedMessage id='TechnicalSupportPhone.title' />:</h5>
            <div className='mt-3 mb-5 p-3' style={{border: '1px solid #150a33', borderRadius: '10px'}}>
              <FiPhoneCall size='1.5em' style={{color: '#4adc4a', float: 'left', marginRight: '10px'}} />
                <p>(000) 000-00-00</p>
                <em><FormattedMessage id='TechnicalSupportPhone.operatingMode' /></em>
            </div>
          </Col>
          <Col md='6' lg='4' className='px-4'>
            <h5 className='text-center'><FormattedMessage id='ManufacturersAddress.title' />:</h5>
            <div className='mt-3 mb-5 p-3' style={{border: '1px solid #150a33', borderRadius: '10px'}}>
              <ImLocation size='1.5em' style={{color: '#ffc107', float: 'left', marginRight: '10px'}} />
              <FormattedMessage id='ManufacturersAddress.address' />
            </div>
           
            <h5 className='text-center'><FormattedMessage id='AddressForShipments.title' />:</h5>
            <div className='mt-3 mb-5 p-3' style={{border: '1px solid #150a33', borderRadius: '10px'}}>
              <ImLocation size='1.5em' style={{color: '#ffc107', float: 'left', marginRight: '10px'}} />
              <FormattedMessage id='AddressForShipments.address' />
            </div>
          </Col>
          <Col md='6' lg='4' className='px-4'>
            <h5 className='text-center'><FormattedMessage id='Additionally' />:</h5>
            <div className='mt-3 mb-5 p-3' style={{border: '1px solid #150a33', borderRadius: '10px'}}>
              <div className='mb-2'>
                <FiPhoneCall size='1.5em' style={{color: '#17a2b8', float: 'left', marginRight: '10px'}} />
                <p>(000) 000-00-00 (viber, telegram)</p>
              </div>

              <div className='mt-3 mb-2'>
                <FaFacebookSquare size='1.6em' style={{color: '#17a2b8', float: 'left', marginRight: '10px'}} />
                <a href='https://facebook.com/magnumgsm' target='_blank' rel="noreferrer">facebook.com/magnumgsm</a>
              </div>

              <div className='mt-3 mb-2'>
                <MdEmail size='1.7em' style={{color: '#17a2b8', float: 'left', marginRight: '10px'}} />
                <p>email@gmail.com</p>
              </div>

              <div className='mt-3'>
                <FaGlobe size='1.5em' style={{color: '#17a2b8', float: 'left', marginRight: '10px'}} />
                <a href='https://magnum.com.ua' target='_blank' rel="noreferrer">magnum.com.ua</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;