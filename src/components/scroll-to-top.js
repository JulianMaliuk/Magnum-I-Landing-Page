import React, { useEffect, useState } from "react";
import {FaArrowCircleUp} from 'react-icons/fa';

import './scroll-to-top.scss';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop} onKeyDown={()=> {}} aria-hidden='true'>
          <div className='scrollTop'>
            <FaArrowCircleUp className="" size='2rem' />
          </div>
        </div>}
    </div>
  );
}