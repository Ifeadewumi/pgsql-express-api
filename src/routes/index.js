/* ES6 Version*/
import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

// var express = require('express');
// var router = express.Router();

/*  ##Comments## */
indexRouter.get('/', (req, res) =>
  res.status(200).json({ message: testEnvironmentVariable })
);

// module.exports = router;
export default indexRouter;