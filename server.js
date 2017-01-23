// 'use strict';

const pg = require('pg');
const express = require('express');

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7000;
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', function(request, response) {
  // DONE: Using the response object, send the index.html file back to the user
  response.sendFile('index.html',{root: './public'});
});

app.get('/mds/all', function(request,response){
  // console.log('bob');
  let client = new pg.Client(conString); // Pass the conString to pg, which creates a new client object
    client.connect(function(err) { // Use the client object to connect to our DB.
      if (err) console.error(err);
      client.query('SELECT * FROM mds', function(err, result) { // Make a request to the DB
        if (err) console.error(err);
        response.send(result);
        client.end();
      });
    })
});

app.post('/mds/insert', function(request, response) {
  console.log(request.body);//A new body object containing the parsed data is populated on the request object after the middleware (i.e. request.body). This object will contain key-value pairs, where the value can be a string or array
  let client = new pg.Client(conString)

  client.connect(function(err) {
    if (err) console.error(err);

    client.query(
      `INSERT INTO mds(title,"authorUrl",category,"publishedOn",synopsis) VALUES($1, $2, $3, $4, $5);`,
      [request.body.title,
        request.body.authorUrl,
        request.body.category,
        request.body.publishedOn,
        request.body.body],
      function(err) {
        if (err) console.error(err);
        client.end();
      }
    );
  });
  response.send('insert complete');
});

app.get('*', function(request,response){
  console.log('new request:', request.url);
  response.status(404).sendFile('404.html',{root:'./public'});
});

app.listen(PORT, function() {
  console.log('server is up and running on port 7000 and can be accessd at th localhost:7000 in your browser');
});
