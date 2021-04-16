import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id='contact' className='contact observe'>
        <h2 className='section-title'>Contact</h2>
        <div className='container'>
          <article className='contactCard'>
            <form
              className='contact-form'
              id='contact-form'
              name='simple-contact-form'
              acceptCharset='utf-8'
              action='https://formspree.io/f/mjvppopb'
              method='POST'
            >
              <fieldset id='contact-form__inputs'>
                <label htmlFor='full-name'>Full Name</label>
                <input
                  type='text'
                  name='name'
                  id='full-name'
                  placeholder='First and Last'
                  required
                />
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  name='_replyto'
                  id='email'
                  placeholder='email@domain.tld'
                  required
                />
                <label htmlFor='message'>Message</label>
                <textarea
                  rows={5}
                  name='message'
                  id='message'
                  placeholder='Message here...'
                  required
                  defaultValue={""}
                />
                <input
                  type='hidden'
                  name='_subject'
                  id='subject'
                  defaultValue='Contact Form Submission'
                />
              </fieldset>
              <input
                id='contact-form__button'
                type='submit'
                defaultValue='Send'
              />
              <p id='contact-form__status' />
            </form>
            <article className='contact-buttons'>
              <p>
                I'm currently available for freelance projects or full-time
                work. If you're interested in working with me, please get in
                touch using one of the methods here. Or feel free to just say
                hi. I like that too.
              </p>
              <div className='social-icons'>
                <ul className='social-icons__list'>
                  <li>
                    <a
                      className='social-icons__list-item'
                      href='https://www.linkedin.com/in/emsad'
                      title='LinkedIn'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='social-icon linkedin'>
                        <svg
                          viewBox='0 0 280 280'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M68.4,34.50000610351563 c0,19 -15.3,34.5 -34.2,34.5 c-18.9,0 -34.2,-15.4 -34.2,-34.5 c0,-19 15.3,-34.5 34.2,-34.5 C53.099999999999994,0.000006103515630684342 68.4,15.50000610351563 68.4,34.50000610351563 zM63.400000000000006,93.40000610351564 h-57.8 V280.20000610351565 h57.8 V93.40000610351564 zM155.8,93.40000610351564 h-55.4 V280.20000610351565 h55.4 c0,0 0,-69.3 0,-98 c0,-26.3 12.1,-41.9 35.2,-41.9 c21.3,0 31.5,15 31.5,41.9 c0,26.9 0,98 0,98 h57.5 c0,0 0,-68.2 0,-118.3 c0,-50 -28.3,-74.2 -68,-74.2 c-39.6,0 -56.3,30.9 -56.3,30.9 v-25.2 H155.8 z' />
                        </svg>
                      </div>
                      <div className='social-icon-text'>
                        <p>LinkedIn</p>
                        <p>https://www.linkedin.com/in/emsad</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className='social-icons__list-item'
                      href='mailto:emsad87@gmail.com'
                      title='Email'
                    >
                      <div className='social-icon email'>
                        <svg
                          viewBox='0 0 309 229'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M-0.000003051757815342171,-0.000006103515630684342 v228.9 h0.30000000000000004 h308.4 h0.8 V-0.000006103515630684342 H-0.000003051757815342171 zM274.3999969482422,26.199993896484386 l-119.7,91.5 l-119.6,-91.5 H274.3999969482422 zM26.299996948242182,52.49999389648437 l64.1,49.1 l-64.1,64.1 V52.49999389648437 zM26.499996948242185,202.59999389648436 l84.9,-84.9 l43.2,33.1 l43,-32.9 l84.7,84.7 L26.499996948242185,202.59999389648436 L26.499996948242185,202.59999389648436 zM283.09999694824216,166.1999938964844 l-64.4,-64.4 l64.4,-49.3 V166.1999938964844 z' />
                        </svg>
                      </div>
                      <div className='social-icon-text'>
                        <p>E-mail</p>
                        <p>emsad87@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className='social-icons__list-item'
                      href='https://github.com/emsad87'
                      title='GitHub'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='social-icon github'>
                        <svg
                          viewBox='0 0 372 363'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M185.89999389648438,0.000003051757815342171 c-102.6,0 -185.9,83.2 -185.9,185.9 c0,82.1 53.3,151.8 127.1,176.4 c9.3,1.7000000000000002 12.3,-4 12.3,-8.9 V318.7000030517578 c-51.7,11.3 -62.5,-21.9 -62.5,-21.9 c-8.4,-21.5 -20.6,-27.2 -20.6,-27.2 c-16.9,-11.5 1.3,-11.3 1.3,-11.3 c18.7,1.3 28.5,19.2 28.5,19.2 c16.6,28.4 43.5,20.2 54.1,15.4 c1.7000000000000002,-12 6.5,-20.2 11.8,-24.9 c-41.3,-4.7 -84.7,-20.6 -84.7,-91.9 c0,-20.3 7.3,-36.9 19.2,-49.9 c-1.9,-4.7 -8.3,-23.6 1.8,-49.2 c0,0 15.6,-5 51.1,19.1 c14.8,-4.1 30.7,-6.2 46.5,-6.3 c15.8,0.1 31.7,2.1 46.6,6.3 c35.5,-24 51.1,-19.1 51.1,-19.1 c10.1,25.6 3.8,44.5 1.8,49.2 c11.9,13 19.1,29.6 19.1,49.9 c0,71.4 -43.5,87.1 -84.9,91.7 c6.7,5.8 12.8,17.1 12.8,34.4 c0,24.9 0,44.9 0,51 c0,4.9 3,10.7 12.4,8.9 c73.8,-24.6 127,-94.3 127,-176.4 C371.79999389648435,83.20000305175782 288.4999938964844,0.000003051757815342171 185.89999389648438,0.000003051757815342171 z' />
                        </svg>
                      </div>
                      <div className='social-icon-text'>
                        <p>Github</p>
                        <p>https://github.com/emsad87</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </article>
        </div>
      </section>
    );
  }
}
