import React from 'react';
import './static/logo.css';

export default function(props){
  return (
    <div id="logo" className="container">
      <h1><a href="#" className="icon icon-tasks"><span>{props.title}</span></a></h1>
    </div>
  )
}
