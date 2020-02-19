import React from 'react';
import './App.scss';
import { Tween } from "react-gsap";

function App() {
  return (
    <div
      className="resume">
      <div className="page1" id="page1">
        <div className="resume-images">
          <Tween
            staggerFrom={{opacity: 0, x: -150, delay: 1}}
            stagger={.2}
            duration={5}
            ease="Power3.easeOut"
            position="title"
          >
            <img
              src={require("./images/IMG_0217.png")}
              alt="me_back_landing"
              className="landing back"/>
            <img
              src={require("./images/IMG_0232.png")}
              alt="me_front_landing"
              className="landing front"/>
          </Tween>
        </div>
        <div className="resume-content" >
          <Tween
            staggerFrom={{opacity: 0, y: 70, delay: 3.5}}
            stagger={.2}
            duration={1}
            ease="Power3.easeOut"
            position="title"
          >
            <h1>Albert Yang</h1>
            <h2>Creativity meets Software Development</h2>
            <div className="scroll-down-container">
              <div className="scroll-down-background">
                <div className="scroll-down"></div>
              </div>
              <div className="scroll-down-text">Scroll Down</div>
            </div>
          </Tween>
        </div>
      </div>
      <div className="design-page" id="designPage">
        <div>
          <h3 id="myElement">The talk of what makes a champion.</h3>
          <p id="myElement">
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
