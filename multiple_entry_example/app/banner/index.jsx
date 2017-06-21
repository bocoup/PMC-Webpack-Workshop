import React from 'react';
import BannerImg from './static/pic05.jpg';

export default function() {
  return (
    <div id="page" className="container">
      <div id="content">
        <div className="title">
          <h2>Welcome to our website</h2>
          <span className="byline">Mauris vulputate dolor sit amet nibh</span>
        </div>
        <p>This is <strong>TwoColours</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
      </div>
      <div id="sidebar"><a href="#" className="image image-full"><img src={BannerImg} alt="" /></a></div>
    </div>
  )
}
