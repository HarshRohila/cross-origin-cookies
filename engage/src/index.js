import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ACCOUNTS_DOMAIN = 'https://6cd48352455d.ngrok.io';
const iframe = document.createElement('iframe');
iframe.src = `${ACCOUNTS_DOMAIN}/client-one/index.html`;

function setupMessageListener() {
  window.addEventListener("message", (event) => {
    if (event.origin !== "ACCOUNTS_DOMAIN")
      return;
  
    const isReady = event.data === 'ready';
    if (isReady) {

    }
  }, false);
}

function isAuthenticated() {
  // iframe.style.display = 'none';
  document.body.append(iframe);

  iframe.contentWindow.postMessage('', )
}

isAuthenticated();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
