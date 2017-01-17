'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('./index.html', function(request, response) {
  // DONE: Using the response object, send the index.html file back to the user
  response.sendFile('index.html',{root: './public'});
});

app.get('*', function(request,response){
  console.log('new request:', request.url);
  response.status(404).sendFile('404.html',{root:'./public'});
});


app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log('server is up and running on port 5000 and can be accessd at th localhost:5000 in your browser');
});
