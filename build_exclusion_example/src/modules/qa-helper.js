'use strict';

export default class QaHelper {
  constructor(app) {
    console.log('QA Helper constructor');
    this.app = app;
    
    let docFrag = document.createDocumentFragment();
    let qaContainer = document.createElement('div');

    let button = document.createElement('button');
    button.innerHTML = 'Call Helper!';
    
    let stateButton = document.createElement('button');
    stateButton.innerHTML = 'Alter State';
    
    qaContainer.appendChild(button);
    qaContainer.appendChild(stateButton);
    docFrag.appendChild(qaContainer);
    document.querySelector('body').appendChild(docFrag);

    button.addEventListener('click', this.helperMethod.bind(this));
    stateButton.addEventListener('click', this.alterState.bind(this));
  }
  
  helperMethod() {
    console.log('QA Helper method called. This will call the app QA method');
    this.app.appQaMethod();
  }
  
  alterState() {
    this.app.state = 'State modified by QA helper class';
  }
}