/* ES6 Version*/
import express from 'express';

const indexRouter = express.Router();

// var express = require('express');
// var router = express.Router();

/*  ##Comments## */
indexRouter.get('/', (req, res) =>
  res.status(200).json({ message: 'Welcome to Express API template'})
);

// module.exports = router;
export default indexRouter;