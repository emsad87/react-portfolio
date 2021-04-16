import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='foter__logo'>
            <a href='mailto:emsad87@gmail.com'>
              <h4>Emsad Ahmetašević</h4>
            </a>
          </div>
          <div className='footer__copy'>
            <div id='licenceBtn'>
              Copyright © <span className='copy-year' /> A. Emsad
            </div>
          </div>
          <div className='footer__credits'>
            <a href='https://github.com/emsad87/emsad87.github.io'>
              <div className='social-icon github'>
                <svg viewBox='0 0 372 363' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M185.89999389648438,0.000003051757815342171 c-102.6,0 -185.9,83.2 -185.9,185.9 c0,82.1 53.3,151.8 127.1,176.4 c9.3,1.7000000000000002 12.3,-4 12.3,-8.9 V318.7000030517578 c-51.7,11.3 -62.5,-21.9 -62.5,-21.9 c-8.4,-21.5 -20.6,-27.2 -20.6,-27.2 c-16.9,-11.5 1.3,-11.3 1.3,-11.3 c18.7,1.3 28.5,19.2 28.5,19.2 c16.6,28.4 43.5,20.2 54.1,15.4 c1.7000000000000002,-12 6.5,-20.2 11.8,-24.9 c-41.3,-4.7 -84.7,-20.6 -84.7,-91.9 c0,-20.3 7.3,-36.9 19.2,-49.9 c-1.9,-4.7 -8.3,-23.6 1.8,-49.2 c0,0 15.6,-5 51.1,19.1 c14.8,-4.1 30.7,-6.2 46.5,-6.3 c15.8,0.1 31.7,2.1 46.6,6.3 c35.5,-24 51.1,-19.1 51.1,-19.1 c10.1,25.6 3.8,44.5 1.8,49.2 c11.9,13 19.1,29.6 19.1,49.9 c0,71.4 -43.5,87.1 -84.9,91.7 c6.7,5.8 12.8,17.1 12.8,34.4 c0,24.9 0,44.9 0,51 c0,4.9 3,10.7 12.4,8.9 c73.8,-24.6 127,-94.3 127,-176.4 C371.79999389648435,83.20000305175782 288.4999938964844,0.000003051757815342171 185.89999389648438,0.000003051757815342171 z' />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
