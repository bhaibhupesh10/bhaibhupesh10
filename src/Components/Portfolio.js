import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper show-on-scroll">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/khuranagarvit019/Facial-Emotion-Recognition" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/images/thumbs/fed.png"} alt="Facial Emotion Detection" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Facial Emotion Detection</h3>
                      <p>The purpose of this project is to train a Convolutional Neural Network which can detect emotions on human faces. The application detects the seven universal facial emotions- Anger, Disgust, Fear, Happy, Sad, Surprised & Neutral.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/khuranagarvit019/Facial-Emotion-Recognition" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <img width="60px" src="https://img.icons8.com/color/4x/000000/python.png" title="Python"/>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper show-on-scroll">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://www.linkedin.com/posts/khuranagarvit019_upes-programming-python3-activity-6678194330441801728-qFZk" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/images/thumbs/fmd.png"} alt="Face Mask Detection" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Face Mask Detection</h3>
                      <p>COVID-19 (Coronavirus) has affected our day to day life and is slowing down the global economy.
All the governments in order to improve their financial condition are opening the lockdowns imposed by them, So it's very necessary that in the Public Area, people are wearing face masks to prevent them from this deadly virus. We have come with an approach, using which it can be easily checked that people are wearing masks or not.</p>
<p>
Practical Implementations -  CCTV cameras can be controlled by programming Raspberry Pi in this approach & those cameras can be installed in public places in order to maintain safety considering the situation of COVID-19 pandemic.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://www.linkedin.com/posts/khuranagarvit019_upes-programming-python3-activity-6678194330441801728-qFZk" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin icon"></i>View on LinkedIn</a></li>
                      </div>
                      <div className="languages">
                        <img width="60px" src="https://img.icons8.com/color/4x/000000/python.png" title="Python"/>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper show-on-scroll">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/khuranagarvit019/TicTacToe-Terminal-Version" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/images/thumbs/tictac.png"} alt="tic-tac-toe" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Tic-Tac-Toe</h3>
                      <p>Tic-Tac-Toe game programmed in C.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/khuranagarvit019/TicTacToe-Terminal-Version" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <img width="60px" src="https://img.icons8.com/color/4x/c-programming.png" title="C"/>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper show-on-scroll">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/The-Semicolons/Baymax" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/images/thumbs/baymax.png"} alt="Baymax" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Baymax Web App - Under Development</h3>
                      <p>A chatbot web application that can assist doctors in hospital for smooth and faster workflows. This chat bot can talk to you and ask you questions regarding your problems and suggest diagnosis to the doctor.</p>
                      <p>This app is under development. Whole Team of <a href="https://the-semicolons.github.io/The-Semicolons/" target="_blank" rel="noopener noreferrer">The Semicolons;</a> is working on it.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/The-Semicolons/Baymax" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <img width="60px" src="https://img.icons8.com/color/48/000000/tensorflow.png"/>
                        <img width="60px" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                        <img width="60px" src="https://img.icons8.com/color/48/000000/firebase.png"/>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper show-on-scroll">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://the-semicolons.github.io/The-Semicolons/#portfolio" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/images/thumbs/RFID.jpg"} alt="Parko" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Parko</h3>
                      <p>A system to automate the parking service with online payments based on parking duration with RFID cards. Keeping log of entry and exit vehicles for security reasons. Payments can be done through the mobile or web app.</p>
                      <p>Developed by team <a href="https://the-semicolons.github.io/The-Semicolons/" target="_blank" rel="noopener noreferrer">The Semicolons;</a></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://the-semicolons.github.io/The-Semicolons/#portfolio" className="button project-button brands" target="_blank" rel="noopener noreferrer">Read More</a></li>
                      </div>
                      <div className="languages">
                        <img width="40px" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                        <img width="40px" src="https://img.icons8.com/fluent/48/000000/arduino.png"/>
                        <img width="40px" src="https://img.icons8.com/color/48/000000/html.png"/>
                        <img width="40px" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                        <img width="40px" src="https://img.icons8.com/color/48/000000/css.png"/>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper show-on-scroll">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://the-semicolons.github.io/The-Semicolons/#portfolio" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/images/thumbs/khet.png"} alt="Khetbazaar" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Khetbazaar</h3>
                      <p>An online e-commerce website dedicated to farmers. The portal will eliminate the middle man in supply chain to provide best revenue for the farmers. The portal also eases the process of buying fertilisers, pesticides and seeds with direct contact to seller.</p>
                      <p>Developed by team <a href="https://the-semicolons.github.io/The-Semicolons/" target="_blank" rel="noopener noreferrer">The Semicolons;</a></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://the-semicolons.github.io/The-Semicolons/#portfolio" className="button project-button brands" target="_blank" rel="noopener noreferrer">Read More</a></li>
                      </div>
                      <div className="languages">
                        <img width="40px" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                        <img width="40px" src="https://img.icons8.com/color/48/000000/html.png"/>
                        <img width="40px" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                        <img width="40px" src="https://img.icons8.com/color/48/000000/css.png"/>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/khuranagarvit019" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;

