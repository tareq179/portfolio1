import TypeWriterEffect from 'react-typewriter-effect'
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import './Banner.css';
const Banner = () => {
  const [state] = React.useState({
    title: "I am Abdul Karim",
    text:
      "i,m Abdul Karim, professional web developer with long time \
    experience in this field​",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <TypeWriterEffect
                    textStyle={{
                      fontFamily: 'Red Hat Display',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '4em',
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                      'I am Abdul Karim',
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                />
                <p>{state.text}</p>
                <ul className="header__ul">
                  <li>
                    <a className="btn" href="https://www.facebook.com/ifraz100/"><FaFacebookF className="headerIcon" /></a>
                  </li>
                  <li>
                    <a className="btn" href="https://www.twitter.com"><FaTwitter className="headerIcon" /></a>
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;