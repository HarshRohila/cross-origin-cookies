import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const ACCOUNTS_DOMAIN = 'https://9ffa84fbee1c.ngrok.io';
const iframe = document.createElement('iframe');
iframe.src = `${ACCOUNTS_DOMAIN}/client-one/index.html`;
iframe.style.display = 'none';

function setupMessageListener(setAuth) {
  window.addEventListener("message", (event) => {
    if (event.origin !== ACCOUNTS_DOMAIN)
      return;

    setAuth({userName: event.data});
  }, false);

  document.body.append(iframe);
}

function App() {

  const [auth, setAuth] = useState();

  useEffect(() => {
    setupMessageListener(setAuth);
  }, [])

  return (
    <>
      <h1>Engage</h1>
      {auth && auth.userName && <h3>Welcome {auth.userName}</h3>}
    </>
  );
}

export default App;
