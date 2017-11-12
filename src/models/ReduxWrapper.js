import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { doAction } from '../controllers/MainController';
import {
  SET_ACTION_TYPE,
  RESET_ACTION_TYPE,
  SET_KEY_VAL_ACTION_TYPE,
  STATE_ID,
} from '../constants';


const initialState = {};

export const ACTION_CREATOR = {
  set(sourceId, value) {
    return {
      type: SET_ACTION_TYPE,
      sourceId,
      value,
    }
  },
  setKeyValue(sourceId, key, value) {
    return {
      type: SET_KEY_VAL_ACTION_TYPE,
      sourceId,
      key,
      value,
    };
  },
  reset(sourceId){
    return {
      type: RESET_ACTION_TYPE,
      sourceId,
    }
  },
};

const REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTION_TYPE:
      return {
        ...state,
        [action.sourceId] : action.value,
      };
      break;
    case SET_KEY_VAL_ACTION_TYPE:
      return {
        ...state,
        [action.sourceId] : {
          ...state[action.sourceId],
          [action.key]: action.value,
        }
      };
      break;
    case RESET_ACTION_TYPE:
      return {
        ...state,
        [action.sourceId] : {
          sourceId: action.sourceId,
          stateId: STATE_ID.STATE_DEFAULT,
        }
      };
      break;
    default:
      return { ...state };
      break;
  }
};

class ReduxWrapper {
  constructor(subscriber) {
    this.store = createStore(REDUCER, applyMiddleware(ReduxThunk));
    this.store.subscribe(subscriber);
  }

  getState(source_id) {
    if (!source_id) {
      return this.store.getState();
    }

    return this.store.getState()[source_id];
  }

  dispatch(something) {
    return this.store.dispatch(something);
  }

  getStateId(source_id) {
    return this.getState(source_id).stateId;
  }

  /*
  * You might add other selector functions below
  */

};

export default new ReduxWrapper(doAction);
