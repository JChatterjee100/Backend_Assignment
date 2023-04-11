const express = require('express');
const app = express();

app.get('/current-time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`The current time is ${currentTime}`);
});

app.post('/post-data', function(req, res) {
	res.send('POST request with random data in body.');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
