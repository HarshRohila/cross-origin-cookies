const ACCES_CONTROL_ALLOW_ORIGIN = 'https://6cd48352455d.ngrok.io';

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()
const cors = require('cors')

app.use(cookieParser());
app.use(customCors())

app.get('/login', function (req, res) {
  console.log(req.cookies)
  const userName = req.query.name;
  setCookie(res, userName)

  res.send({ message: 'hello world' })
})

function setCookie(res, userName) {
  const options = {
    maxAge: 1000 * 60 * 120,
    httpOnly: true,
    sameSite: 'None',
    secure: true
  }

  res.cookie('userName', userName, options)
}

app.listen(3000)

function customCors() {
  const corsOptions = {
    origin: ACCES_CONTROL_ALLOW_ORIGIN,
    credentials: true
  }

  return cors(corsOptions);
}