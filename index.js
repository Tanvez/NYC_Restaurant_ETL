require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const http = require('http');
const routes = require('./server/routes');

const app = express();

app.use(cors({ credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

// Add `/api` routes
const router = express.Router();
routes.forEach(routeFn => routeFn(router));

app.use('/api', router);

// Generic error handler
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
} else {
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Unexpected error');
  });
}

// Run the API on `port`
const normalizePort = val => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) return val;
  return port >= 0 ? port : false;
};
const port = normalizePort(process.env.PORT || 3001);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API listening on port: ${port}`);
});
