import React from 'react';
import './static/contact.css';

export default function() {
  return (
    <div id="contact" className="container">
      <div className="major">
        <h2>Get in touch</h2>
        <span className="byline">Phasellus nec erat sit amet nibh pellentesque congue</span>
      </div>
      <ul className="contact">
        <li><a href="#" className="icon icon-twitter"><span>Twitter</span></a></li>
        <li><a href="#" className="icon icon-facebook"><span></span></a></li>
        <li><a href="#" className="icon icon-dribbble"><span>Pinterest</span></a></li>
        <li><a href="#" className="icon icon-tumblr"><span>Google+</span></a></li>
        <li><a href="#" className="icon icon-rss"><span>Pinterest</span></a></li>
      </ul>
    </div>
  )
}
