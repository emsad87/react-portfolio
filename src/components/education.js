import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <section id='education' className='education observe'>
        <h2 className='section-title'>Education</h2>
        <div className='container'>
          <article className='education-card'>
            <article className='education__school'>
              <h2 className='education__title'>Education</h2>
              <article className='edu-item'>
                <h3 className='edu-item__title'>
                  Canon service education/certificate
                </h3>
                <p className='edu-item__year-range'>2015-Present</p>
                <p className='edu-item__desc'>Neutrino d.o.o. Tuzla, BiH</p>
                <p className='edu-item__desc'>(Canon Partner)</p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>
                  Konica Minolta service education/certificate
                </h3>
                <p className='edu-item__year-range'>2012-2015</p>
                <p className='edu-item__desc'>BiroCommerce d.o.o. Odžak, BiH</p>
                <p className='edu-item__desc'>(Konica Minolta Partner)</p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>
                  High School Electrical Technician EU VET Program
                </h3>
                <p className='edu-item__year-range'>2003-2006</p>
                <p className='edu-item__desc'>
                  M.S.Š. Hasan Kikić, Gradačac - BiH
                </p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>Elementary School</h3>
                <p className='edu-item__year-range'>1995-2003</p>
                <p className='edu-item__desc'>
                  O.Š. Safvet Beg-Basagić, Gradačac - BiH
                </p>
              </article>
            </article>
            <article className='education__courses'>
              <h2 className='education__title'>Self Taught</h2>
              <article className='edu-item'>
                <h3 className='edu-item__title'>html</h3>
                <p className='edu-item__desc'>
                  Intermediate level - Semantic HTML
                </p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>CSS</h3>
                <p className='edu-item__desc'>
                  Intermediate level - Responsive CSS
                </p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>javascript</h3>
                <p className='edu-item__desc'>
                  Intermediate level - Vanilla JS
                </p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>PHP</h3>
                <p className='edu-item__desc'>
                  Basic level - Simple CRUD, form mail sending...
                </p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>SQL</h3>
                <p className='edu-item__desc'>
                  Basic level - Creating tables, inserting, deleting, editing
                  data...
                </p>
              </article>
              <article className='edu-item'>
                <h3 className='edu-item__title'>Frameworks</h3>
                <p className='edu-item__desc'>Bootstrap...</p>
              </article>
            </article>
          </article>
        </div>
        <div className='photoCredit'>
          <a href='https://unsplash.com/@munjay'>
            Photo by: Mwesigwa Joel / unsplash.com
          </a>
        </div>
      </section>
    );
  }
}
