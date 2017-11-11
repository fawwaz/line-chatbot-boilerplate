import dotenv from 'dotenv';
dotenv.config();

import * as Line from '@line/bot-sdk';
import moment from 'moment';

class LineWrapper {
  constructor() {
    console.log('Constructor should be run once ');
    console.log(process.env.LINE_CHANNEL_ACCESS_TOKEN);
    console.log(process.env.LINE_CHANNEL_SECRET);
    this._line = new Line.Client({
      channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
      channelSecret: process.env.LINE_CHANNEL_SECRET || ''
    });
  }

  /**
  * Core Line Message Wrapper
  */

  replyLineMessage(event, array_of_messages){
    return this._line.replyMessage(event.replyToken, array_of_messages);
  }
  
  pushLineMessage(to, array_of_messages) {
    return this._line.pushMessage(to, array_of_messages);
  }

  /**
  * Line Message Selectors
  */
  getSourceId(event) {
    var evnt_src = event.source.type;
    if (evnt_src == "group") {
      return event.source.groupId;
    }else if (evnt_src == "room") {
      return event.source.roomId;
    }else if (evnt_src == "user") {
      return this.getUserId(event);
    } else {
      return undefined;
    }
  }
  
  getPostBack(event) {
    return event.postback;
  }
  
  getTextMessage(event) {
    return event.message.text;
  }
  
  getSourceType(event) {
    return event.source.type;
  }

  getMessageType(event) {
    return event.message.type;
  }
  
  getUserId(event) {
    return event.source.userId;
  }
  
  getSourcetype(event) {
    return event.source.type;
  }

  /**
  * Line Messages Types
  */
  textMessage(replytext){
    return {
      'type': 'text',
      'text': replytext
    };
  }

  audioMessage(source, duration) {
    return {
      'type': 'audio',
      'originalContentUrl': source,
      'duration': duration,
    };
  }
  
  carouselMessage(columns, altText){
    return {
      'type': 'template',
      'altText': altText ||'This message should be opened in normal line',
      'template': {
        "type": "carousel",
        "columns": columns
      }
    };
  }
  
  datePickerMessage(message, identifier, min, max){
    var today = moment().format('YYYY-MM-DD');
    var next_5_days = moment().add(5, 'days').format('YYYY-MM-DD');
    const minDate = min || today;
    const maxDate = max || today; 
    return {
      "type": "template",
      "altText": message.substring(0, 160),
      "template": {
          "type": "buttons",
          "text": message.substring(0, 160),
          "actions": [
              {
                'type': 'datetimepicker',
                'label': 'Pilih tanggal',
                'data': identifier || 'postback',
                'mode': 'date',
                
                'min': minDate,
                'max': maxDate,
              },
          ]
      }
    };
  }
  
  confirmMessage(message) {
    return {
      "type": "template",
      "altText": message.substring(0, 240),
      "template": {
          "type": "confirm",
          "text": message.substring(0, 240),
          "actions": [
              {
                "type": "message",
                "label": "Ya",
                "text": "ya"
              },
              {
                "type": "message",
                "label": "tidak",
                "text": "tidak"
              }
          ]
      }
    }
  }
  
  imageMessage(url){
    return {
      'type': 'image',
      'originalContentUrl':url,
      'previewImageUrl':url 
    };
  }
  
  stickerMessage(stickerId, packageId) {
    return {
      'type': 'sticker',
      'stickerId': stickerId,
      'packageId': packageId
    };
  }
  
}

export default new LineWrapper();
