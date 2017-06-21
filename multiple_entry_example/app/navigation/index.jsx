import React from 'react';
import './static/nav.css';

export default function(){
  return (
    <header id="header">
      <div id="menu" className="container">
        <ul>
          <li className="current_page_item"><a href="index.html" title="">Homepage</a></li>
          <li><a href="post.html" title="">Post</a></li>
          <li><a href="portfolio.html" title="">Portfolio</a></li>
        </ul>
      </div>
    </header>
  )
}
