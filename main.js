const express = require('express');

app = express();

app.get('*', (req, res) => {
   res
      .header('Location', 'https://www.kyoyomi.com' + req.originalUrl)
      .status(302)
      .send();
});

app.listen(8080);