const express = require('express');
const app = express();
const router = require('./src/dvdrental/routes');

app.use('/router', router);
app.use(express.json());

app.listen(3000)