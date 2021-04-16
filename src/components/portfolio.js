import React, { Component } from "react";
import dgm from "../images/projects/dgm/DGM.png";
import typingGame from "../images/projects/css-framework/css-framework.png";
import cssFramework from "../images/projects/typing-game/TTT.png";

export default class Portfolio extends Component {
  render() {
    return (
      <section id='portfolio' className='portfolio observe'>
        <h2 className='section-title'>Portfolio</h2>
        <div className='container'>
          <article className='project-card'>
            <div className='project-img'>
              <img src={dgm} alt='Project image' />
              <div className='project-cards__buttons'>
                <a
                  className='project-card__button'
                  href='https://dgm-network.com/'
                  target='_blank'
                >
                  View live site
                </a>
                <a
                  className='project-card__button'
                  href='https://github.com/emsad87/DGM'
                  target='_blank'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='project__info'>
              <h3 className='project__title'>DGM - Digital Global Marketing</h3>
              <p>
                This was my first project for a client. It's a one-page website
                with a contact form.
              </p>
              <p>Tools used:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>
                  <a href='https://formsubmit.co/'>formsubmit.co</a>
                </li>
              </ul>
              <span className='readMore'>
                <p>
                  This was my first project done for a real client. It is a
                  one-page info web site with a contact form.
                </p>
                <p>
                  Used a simple color palette, parallax backgrounds, different
                  color for highlight parts, snaping for sections,{" "}
                  <a href='https://formsubmit.co/'>formsubmit.co</a> for the
                  contact form with some custom jquery.
                </p>
                <p>
                  It was a pleasure working on this project because I learned a
                  lot during the process.
                </p>
              </span>
              <button className='readMoreBtn'>Read more</button>
            </div>
          </article>
          <article className='project-card'>
            <div className='project-img'>
              <img src={typingGame} alt='Project image' />
              <div className='project-cards__buttons'>
                <a
                  className='project-card__button'
                  href='https://emsad87.github.io/typing-game/'
                  target='_blank'
                >
                  View live site
                </a>
                <a
                  className='project-card__button'
                  href='https://github.com/emsad87/typing-game'
                  target='_blank'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='project__info'>
              <h3 className='project__title'>Typing Game (Winning project)</h3>
              <p>
                This was my first hackathon project ever. It's a simple typing
                game made for the{" "}
                <a
                  href='https://mintbean.io/meets/09a8401f-d3eb-4848-92ef-1a05bb25b13a/projects/e9c12676-db3f-4500-ac00-d40ac9701d7f'
                  target='_blank'
                >
                  "JS Hacks: Typing Karaoke" Hackathon by Mintbean.
                </a>{" "}
                Made with HTML, CSS and JavaScript. This project means a lot for
                me because with this project I WON my first hackathon ever. The
                Mintbean community helped me a lot with self-confidence, and to
                realize how much I know.
              </p>
              <p>Tools used:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <span className='readMore'>
                <p>
                  The game is about practicing and testing typing speed by
                  typing nice quotes against the timer.
                </p>
                <p>
                  Type as fast as you can... Practice your typing skills and
                  test your typing speed with TTT (Typing Typing Typing) by
                  typing nice quotes.
                </p>
              </span>
              <button className='readMoreBtn'>Read more</button>
            </div>
          </article>
          <article className='project-card'>
            <div className='project-img'>
              <img src={cssFramework} alt='Project image' />
              <div className='project-cards__buttons'>
                <a
                  className='project-card__button'
                  href='https://emsad87.github.io/css-framework/'
                  target='_blank'
                >
                  View live site
                </a>
                <a
                  className='project-card__button'
                  href='https://github.com/emsad87/css-framework'
                  target='_blank'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='project__info'>
              <h3 className='project__title'>CSS - Framework</h3>
              <p>
                This was my project for the{" "}
                <a
                  href='https://mintbean.io/meets/4b9cd41c-4a27-4c08-a493-3095f9fe2b20/projects/91f173a1-1697-44f0-b7a6-a89f6859bf06'
                  target='_blank'
                >
                  "JS Hacks: BYOB, Build Your Own Bootstrap!" by Mintbean
                </a>
                . It was about building a css framework.
              </p>
              <p>
                Building a css framework was on my to-do list for a long time.
                Finally, something encouraged me to start with it. There is a
                lot more to be done, but I managed to start the basic foundation
                to later upgrade it to a full css framework, mainly for my own
                use.
              </p>
              <p>Tools used:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <span className='readMore'>
                <p>
                  During this project, I learned a lot more than just coding.
                  Also realized what else I need to learn and what to improve.
                  Learned more about sass and project organization. After this,
                  I gonna focus on upgrading my knowledge, skill and finish up
                  some started projects, also continuing this css framework
                  project.
                </p>
              </span>
              <button className='readMoreBtn'>Read more</button>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
