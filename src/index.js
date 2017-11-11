import http from 'http'
import app from './server'

const server = http.createServer(app);
let currentApp = app;
server.listen(app.get('port'), function () {
  console.log("server running on port", app.get('port'));
});

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  });
};
