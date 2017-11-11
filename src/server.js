import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import Promise from 'bluebird';
import bodyParser from 'body-parser';

import * as LineDev from 'modified-line-nodejs-sdk';
import * as LineProd from '@line/bot-sdk';
const Line = process.env.DEV_ENV ? LineDev : LineProd;

import ReduxWrapper from './models/ReduxWrapper';
import {
  doAction,
  decideAction,
} from './controllers/MainController';

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || ''
}

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/webhook', Line.middleware(config));
app.use(bodyParser.json());

app.post('/webhook', function(req, res){
  Promise
    .all(req.body.events.map(decideAction))
    .then(function(result){
        console.dir(result);
        return res.json(result);
    }).catch(err => {
      console.dir(err);
    });
});

app.get('/', function(req, res) {
  res.redirect('https://github.com/fawwaz/line-chatbot-boilerplate');
});

export default app;
