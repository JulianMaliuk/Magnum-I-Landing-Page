import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import { System } from '../components'
import iImageIL10 from '../images/i-image-iL10.jpg'
import iImageIL20 from '../images/i-image-iL20.jpg'
import iImageIS40 from '../images/i-image-iS40.jpg'
import iImageIS80 from '../images/i-image-iS80.jpg'

const Systems = () => {

  const [prices, setPrices] = useState({
    iL10: null,
    iL20: null,
    iS40: null,
    iS80: null,
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/prices.json');
        setPrices(response.data);
      } catch {}
    }
    fetchData();
  }, []);


  return (
    <div className='systems' id='systems'>
      <div className="block-overlay" style={{opacity: '0.9'}}></div>
      <Container className='py-5'>
        <System 
          key='iL10'
          id='iL10' 
          title="iL10" 
          price={prices.iL10}
          img={iImageIL10} 
          iConf={{
            info: true,
            gps: false,
            gpsOption: true,
            engblock: true,
            sensors: true,
            identification: false,
            prolock: false,
            phoneOrKeychain: true,
            mobApp: true,
            autostart: false,
          }}
          description={[0,1,2,3]}
          mainFunctions={[1,3,4,5,6,7,8,9,10,13,14]}
          securFunctions={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
          antiTheftFunctions={[2,3,4,5,6,7,8]}
          notificationFunctions={[1,2,3,4,5]}
          additionalFeatures={[1,2,3,4,7,9,10,11,13,14,15,16]}
          setOptions={[1,3,4,5,6,7,8,11,12,13,14]}
          manualUrl='https://magnum-i.docs.stoplight.io/iL10' >
        </System>
        <hr />
        <System 
          id='iL20' 
          title="iL20" 
          price={prices.iL20}
          img={iImageIL20}
          iConf={{
            info: true,
            gps: false,
            gpsOption: true,
            engblock: true,
            sensors: true,
            identification: false,
            prolock: true,
            phoneOrKeychain: true,
            mobApp: true,
            autostart: false,
          }}
          description={[0,2,3]}
          mainFunctions={[1,3,4,5,6,7,8,9,10,13,14]}
          securFunctions={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
          antiTheftFunctions={[2,3,4,5,6,7,8]}
          notificationFunctions={[1,2,3,4,5]}
          additionalFeatures={[1,2,3,4,5,6,7,8,9,10,11,13,14,15,16]}
          setOptions={[1,2,3,4,5,6,7,8,11,12,13,14]}
          manualUrl='https://magnum-i.docs.stoplight.io/iL20' />
        <hr />
        <System 
          id='iS40' 
          title="iS40" 
          price={prices.iS40}
          img={iImageIS40}
          iConf={{
            info: true,
            gps: true,
            gpsOption: false,
            engblock: true,
            sensors: true,
            identification: true,
            prolock: false,
            phoneOrKeychain: true,
            mobApp: true,
            autostart: true,
          }}
          description={[0,1,2,3]}
          mainFunctions={[2,5,6,7,8,9,10,11,12,13,14]}
          securFunctions={[1,2,3,4,5,6,7,8,9,10,11,12,14]}
          antiTheftFunctions={[1,2,3,4,5,6,7,8]}
          notificationFunctions={[1,2,3,4,5]}
          additionalFeatures={[1,2,3,4,7,8,9,10,11,12,13,14,15,16]}
          setOptions={[1,3,4,5,6,7,8,9,10,11,12,13,14]}
          manualUrl='https://magnum-i.docs.stoplight.io/iS40' />
        <hr />
        <System 
          id='iS80' 
          title="iS80" 
          price={prices.iS80}
          img={iImageIS80}
          iConf={{
            info: true,
            gps: true,
            gpsOption: false,
            engblock: true,
            sensors: true,
            identification: true,
            prolock: true,
            phoneOrKeychain: true,
            mobApp: true,
            autostart: true,
          }}
          description={[0,2,3]}
          mainFunctions={[1,3,4,5,6,7,8,9,10,11,12,13,14]}
          securFunctions={[1,2,3,4,5,6,7,8,9,10,11,12,14]}
          antiTheftFunctions={[1,2,3,4,5,6,7,8]}
          notificationFunctions={[1,2,3,4,5]}
          additionalFeatures={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
          setOptions={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
          manualUrl='https://magnum-i.docs.stoplight.io/iS80' />
      </Container>
    </div>
  );
};

export default Systems;