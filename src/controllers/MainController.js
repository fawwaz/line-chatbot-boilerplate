import dotenv from 'dotenv';
dotenv.config();

import Redux from '../models/ReduxWrapper';
import Line from '../utils/LineWrapper';
import commonHandler from './CommonController';
import handleDefaultState from './DefaultStateController';
import { STATE_ID } from '../constants';

export const decideAction = event => {
  if (process.env.DEV_ENV) {
    console.log('-------- Retrieved Object From Line --------');
    console.dir(event);
    console.log('--------------------------------------------');
    console.log('============ Server Redux State ============');
    console.dir(Redux.getState());
    console.log('============================================');
  }

  commonHandler(event);

  const message_source = Line.getSourcetype(event);
  switch(message_source) {
    case 'group':
      return decideActionGroupOrRoom(event);
      break;
    case 'room':
      return decideActionGroupOrRoom(event);
      break;
    case 'user':
      return decideActionUser(event);
      break;
    default:
      return null;
      break;
  }
}

const decideActionGroupOrRoom = event => {
  const message_type = Line.getMessageType(event);
  switch(message_type) {
    case 'text':
      return decideActionGroupOrRoomTextMessage(event);
      break;
    default:
      return null;
      break;
  }
}

const decideActionUser = event => {
  const message_type = Line.getMessageType(event);
  switch(message_type) {
    case 'text':
      return decideActionUserTextMessage(event);
      break;
    default:
      return null;
      break;
  }
}

const decideActionGroupOrRoomTextMessage = event => {
  const sourceId = Line.getSourceId(event);
  const stateId = Redux.getStateId(sourceId);

  switch(stateId){
    case STATE_ID.STATE_DEFAULT:
      return handleDefaultState(event);
    default:
      return handleDefaultState(event);
  }
}

const decideActionUserTextMessage = event => {
  const sourceId = Line.getSourceId(event);
  const stateId = Redux.getStateId(sourceId);

  switch(stateId){
    case STATE_ID.STATE_DEFAULT:
      return handleDefaultState(event);
    default:
      return handleDefaultState(event);
      break;
  }
}

/**
 * doAction always being called each time any changes in redux state
 */

export const doAction = () => {
  const state = Redux.getState();
  if (process.env.DEV_ENV) {
    console.log('------ State changed : New Redux State ------');
    console.dir(state);
    console.log('---------------------------------------------');
  }
  return null;
}
