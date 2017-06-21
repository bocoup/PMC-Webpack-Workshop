import React from 'react';
import './static/portfolio.css';
import Img1 from './static/pic01.jpg';
import Img2 from './static/pic02.jpg';
import Img3 from './static/pic03.jpg';
import Img4 from './static/pic04.jpg';

export default function(){
  return (
    <div id="portfolio-wrapper">
      <div id="portfolio" className="container">
        <div className="major">
          <h2>Suspendisse lacus turpis</h2>
          <span className="byline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="column1">
          <a href="#" className="image image-full"><img src={Img1} height="150" alt="" /></a>
          <div className="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" className="button">Read More</a>
          </div>
        </div>
        <div className="column2">
          <a href="#" className="image image-full"><img src={Img2} height="150" alt="" /></a>
          <div className="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" className="button">Read More</a>
          </div>
        </div>
        <div className="column3">
          <a href="#" className="image image-full"><img src={Img3} height="150" alt="" /></a>
          <div className="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" className="button">Read More</a>
          </div>
        </div>
        <div className="column4">
          <a href="#" className="image image-full"><img src={Img4} height="150" alt="" /></a>
          <div className="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" className="button">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
