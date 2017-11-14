# Line Messenger Chat Bot Boilerplate

An opinionated boilerplate for building Line Messenger Chatbot. 

## Key Features
Why you should use this boilerplate instead of their plain example code.
1. It supports [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) so you can code effectively without restarting the server over and over again. 
2. Better abstraction
separate between logical operation, state/data manipulation and presentation layer.
3. Ability to test the bot locally.
Immediately test your bot from your local computer without pushing to heroku.
4. Ability to simulate multiple user simultaneously.
5. Ability to test your bot even if you don't have any smartphone.

Click the button below to deploy it to heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Showcase / Examples
* [Mastermind](https://github.com/fawwaz/line-mastermind-chabot-game) chatbot (in Production, you can simply add him using this line ID `@rgr5367i`)  
![Demo](https://media.giphy.com/media/26u45VMCueClTdBPG/giphy.gif)

## How to use 
### 1. Open [https://developers.line.me/en/](https://developers.line.me/en/)
Login with your Line account, go through then create a new bot follow [this guide](https://developers.line.me/en/docs/messaging-api/getting-started/). There are 3 kinds of accounts, developer trial, Free account and Premium account. If you choose developer trial, you can use LINE `push` message API. However, your bot can only have up to 50 friends. If you choose Free account, you are unable to use LINE `push` message API. Your bot may have unlimited friends with this account type. If your bot want to use LINE `push` message API & unlimited friends, you need to choose Free account and upgrade the account to premium account later. 
```
According to line dashboard, the premium account is free until 30 january 2018. 
You just need to put your credit card number to use premium account without any charge.
```

### 2. Get your Line Secret Token
Open your [developer console](https://developers.line.me/console/), choose one of your bots. On Channel Secret section click **issue**. Don't forget to note **Channel ID** and **Channel Access Token** too.

### 3. Deploy the app to heroku
Make sure you have register yourself on heroku. Deploy this boilerplate to heroku by clicking the heroku button above. Fill **Channel Secret, Channel ID and Channel Access Token** form with the value retrieved in previous step. You may choose whatever **App Name** you like but you need to remember this for the next step.
```
Heroku will serve your bot using your App Name
so it will be available under https://[YOUR_APP_NAME].herokuapp.com
```

### 4. Update Line Messenger Configuration to Link the bot on heroku
Open your [developer console](https://developers.line.me/console/), choose one of your bots. Go through Message Setting section. Enable Webhook by clicking the pen logo in the right and choose `Enabled`.  In the next section, click pen icon, edit Webhook URL with your **App Name** you've choosen in previous step. Fill it with the following format `https://[YOUR_APP_NAME].herokuapp.com/webhook` . So if your **App Name** in step 3 equal to `my-example-bot` then you need to fill this input with `https://my-example-bot.herokuapp.com/webhook`.

### 5. Clone to local
Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) , login to your heroku account by running this command :
```
heroku login
```
clone your app, assumming that your **App Name** is `my-example-bot`, then you need to clone it to your local machine :
```
heroku git:clone -a my-example-bot
cd my-example-bot
```

### 6. Modify your code
Modify the bot code, read this [general guideline](https://github.com/fawwaz/line-chatbot-boilerplate/wiki)


### 7. Test Your code locally
Copy `.env.example` , rename it to `.env`, edit the `.env` file put your **Channel Secret, Channel ID and Channel Access Token** there.
To test your bot locally, you have to run this command :
```
npm run dev
```
Then follow the tutorial described [here](https://gist.github.com/fawwaz/f41ed5c0253249f6c1a93ea49a6be68b), (you can simply skip step 1 & 2,  go through step 3 there).

### 8. Deploy changes to heroku 
You can follow normal heroku workflow :
```
git add .
git commit -am "your commit message"
git push heroku master
```




