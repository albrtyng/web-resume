import React, {useRef, useEffect} from 'react';
import './App.scss';
import ScrollMagic from "scrollmagic";
import {TweenMax, TimelineMax, Power3} from 'gsap';

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function App() {
  let app = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let content = useRef(null);
  let scrollIndicator = useRef(null);

  const controller = new ScrollMagic.Controller();

  let tl = new TimelineMax({delay: .8});

  useEffect(() => {
    const titleName = content.children[0];
    const titleHeading = content.children[1];

    TweenMax.to(app, 0, {css: {visibility: 'visible'}});
    tl.staggerFrom([circleRed, circleBlue], 2, {opacity: 0, x: -150, ease: Power3.easeOut}, .2, 'title');
    tl.staggerFrom([titleName, titleHeading, scrollIndicator], 1, {opacity: 0, y: 70, ease: Power3.easeOut, delay: .8}, .15, 'title');

    new ScrollMagic.Scene({
      triggerElement: "#designPage",
      triggerHook: "onEnter"
    })
      .setPin("#page1")
      .setTween(TweenMax.fromTo(
        "#designPage",
        0,
        { yPercent: 100 },
        { yPercent: 0},
        "+=1"
      ))
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#designPage",
      triggerHook: "onEnter",
      duration: "100%"
    })
      .setTween(TweenMax.to(
        "#page1",
        3,
        {opacity: 0, ease: Power3.easeOut}
      ))
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#designPage",
        offset: 250
      })
        .setTween(TweenMax.from("#myElement", .8, {
          x:200,
          opacity: 0,
          ease: Power3.easeOut
        }))
        .addTo(controller);
  }, [tl, controller])

  return (
    <div
      ref = {el => app = el} 
      className="resume">
      <div className="page1" id="page1">
        <div className="resume-images">
          <img
            src={require("./images/IMG_0217.png")}
            alt="me_back_landing"
            className="landing back"
            ref = {el => circleBlue = el}/>
          <img
            src={require("./images/IMG_0232.png")}
            alt="me_front_landing"
            className="landing front"
            ref = {el => circleRed = el}/>
        </div>
        <div className="resume-content" ref = {el => content = el}>
          <h1>Albert Yang</h1>
          <h2>Creativity meets Software Development</h2>
          <div className="scroll-down-container" ref={el => scrollIndicator = el}>
            <div className="scroll-down-background">
              <div className="scroll-down"></div>
            </div>
            <div className="scroll-down-text">Scroll Down</div>
          </div>
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
