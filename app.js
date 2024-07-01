const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Static Files
app.use(express.static('public'))
app.use(express.urlencoded( { extended: true } ));

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full')
app.set('view engine', 'ejs')

const router = require("./server/router/router");
app.use(router);

app.listen(800, () => console.info(`http://localhost:800`))