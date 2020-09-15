// eslint-disable-next-line no-unused-vars
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import pacote from '../../package.json';

const Middlewares = (app: express.Application) => {
  app.use(bodyParser.json());
  app.use('/health', (req, res) => res.status(200).send('OK'));
};

export default Middlewares;
