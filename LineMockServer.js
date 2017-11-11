var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello world');
});

app.post('/message/reply',function(req, res){
    console.log('>>>>>> RETRIEVED OBJECT FROM BOT SERVER <<<<<<');
    showTime();
    console.dir(req.body);
    console.log('>>>>>> -------------------------------- <<<<<<');
    res.json(req.body);
});

app.post('/message/push', function(req, res){
    console.log('>>>>>> RETRIEVED OBJECT FROM BOT SERVER <<<<<<');
    showTime();
    console.dir(req.body);
    console.log('>>>>>> -------------------------------- <<<<<<');
    res.json(req.body);
});

app.get('/profile/:userId', function(req, res){
    var users = {
        'member_1':{
            'displayName': 'Spongebob',
            'userId': 'member_1',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_2':{
            'displayName': 'Patrick Star',
            'userId': 'member_2',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_3':{
            'displayName': 'Sandy Squirrel',
            'userId': 'member_3',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_4':{
            'displayName': 'Mr. Crab',
            'userId': 'member_4',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_5':{
            'displayName': 'Plankton',
            'userId': 'member_5',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_6':{
            'displayName': 'Larry Lobster',
            'userId': 'member_6',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_7':{
            'displayName': 'SquidWard Tentacle',
            'userId': 'member_7',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_8':{
            'displayName': 'Mrs Puff',
            'userId': 'member_8',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_9':{
            'displayName': 'Gary the snails',
            'userId': 'member_9',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_10':{
            'displayName': 'Squilliam',
            'userId': 'member_10',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_11':{
            'displayName': 'Pearl',
            'userId': 'member_11',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_12':{
            'displayName': 'Flying dutchman',
            'userId': 'member_12',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_13':{
            'displayName': 'Neptunus',
            'userId': 'member_13',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_14':{
            'displayName': 'Karen robot',
            'userId': 'member_14',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_15':{
            'displayName': 'Mermaid man',
            'userId': 'member_15',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
        'member_16':{
            'displayName': 'Barnacle boys',
            'userId': 'member_16',
            'pictureUrl': 'http://placeholder.it/256x256',
            'statusMessage': 'exampleStatusMessage',
        },
    };

    var selectedUser = users[req.params.userId];
    showTime();
    console.log("Returning profile for userId = "+req.params.userId);
    console.dir(selectedUser);
    res.json(selectedUser);
});

app.post('*', function(req, res){
    console.log('>>>>>> RETRIEVED OBJECT FROM BOT SERVER <<<<<<');
    showTime();
    console.dir(req.body);
    console.log('>>>>>> -------------------------------- <<<<<<');
    res.json(req.body);
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});

function showTime(){
    var options = {
        timeZone: 'Asia/Jakarta',
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);
    console.log(formatter.format(new Date()));
}
