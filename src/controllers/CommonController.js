import Redux, { ACTION_CREATOR } from '../models/ReduxWrapper';
import Line from '../utils/LineWrapper';

const independentAction = event => {
  const sourceId = Line.getSourceId(event);
  const sourceState = Redux.getState(sourceId);
  
  // If undefined / not registered yet, dispatch an action
  if (!sourceState) {
    Redux.dispatch(ACTION_CREATOR.reset(sourceId));
  }
}

export default independentAction;
