const serveStatic = require('serve-static');
const express = require('express');
const app = express();

// Serve static html file
app.use(serveStatic(`${__dirname}/dist`));

app.listen(3000);
