/* global QA_MODE */
'use strict';
import QaHelper from './qa-helper';

export default class App {
  constructor() {
    console.log('App constructor');

    let docFrag = document.createDocumentFragment();
    let appContainer = document.createElement('div');
    appContainer.className = 'app-state';
    docFrag.appendChild(appContainer);
    document.querySelector('body').appendChild(docFrag);

    this.state = 'Default App State';
    
    if (QA_MODE) {
      this.qa = new QaHelper(this);
    }
  }
  
  get state() {
    return this._state;
  }
  
  set state(val) {
    this._state = val;
    console.log('state:' + val);
    document.querySelector('.app-state').innerHTML = val;
  }
  
  appMethod() {
    console.log('App method');
  }

  appQaMethod() {
    if (!QA_MODE) {
      return;
    }
    this.state = 'Modified by App QA Method Helper'
    console.log('App QA method');
  }
}
