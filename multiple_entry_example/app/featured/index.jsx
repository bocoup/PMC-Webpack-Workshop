import React from 'react';
import './static/featured.css';

export default function() {
  return (
    <div id="featured-wrapper">
      <div id="featured" className="container">
        <div className="major">
          <h2>Maecenas lectus sapien</h2>
          <span className="byline">Cras vitae metus aliquam risus pellentesque pharetra</span>
        </div>
        <div className="column1">
          <span className="icon icon-bar-chart"></span>
          <div className="title">
            <h2>Maecenas lectus sapien</h2>
            <span className="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
        <div className="column2">
          <span className="icon icon-qrcode"></span>
          <div className="title">
            <h2>Praesent scelerisque</h2>
            <span className="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
        <div className="column3">
          <span className="icon icon-building"></span>
          <div className="title">
            <h2>Fusce ultrices fringilla</h2>
            <span className="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
        <div className="column4">
          <span className="icon icon-picture"></span>
          <div className="title">
            <h2>Etiam posuere augue</h2>
            <span className="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
      </div>
    </div>
  )
}

