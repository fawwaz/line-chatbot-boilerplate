import Redux, { ACTION_CREATOR } from '../models/ReduxWrapper';
import { STATE_ID } from '../constants';
import Line from '../utils/LineWrapper';

const defaultStateController = event => {
  const sourceId = Line.getSourceId(event);
  const message = Line.getTextMessage(event).toLowerCase().trim();
  const currentState = Redux.getState(sourceId);

  // Matching using regular expression, read more about regex here : https://github.com/zeeshanu/learn-regex
  if (message.match(/^help$/)) {
    const reply1 = 'Hi, this message appeared as you type the word `help` ';
    const reply2 = 'You can also send multiple messages at once';
    const replies = [
      Line.textMessage(reply1),
      Line.textMessage(reply2),
    ];
    return Line.replyLineMessage(event, replies);
  }

  // Other than help, we will reply the same message sent by the user.
  Line.replyLineMessage(event, message);

  return null;
}

/**
 * Helper functions
 */

export default defaultStateController;
