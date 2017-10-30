'use strict';
const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req,res)=>{
  res.send('Whats up hermanoooo!! Que Paso')
});
app.listen(PORT,HOST);
console.log(`App listening on http://${HOST}:${PORT}`);
