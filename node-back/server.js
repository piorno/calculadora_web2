const express = require("express");
const app = express();


const cors = require("cors");

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./app/routes/calc.routes.js')(app) // Import product route
require('./app/routes/auth.routes.js')(app) // Import auth route

const pathReact = __dirname + '/app/views/';

app.use(express.static(pathReact));

app.get('*', function (req, res) {
    res.sendFile(pathReact + "index.html");
});

app.listen(8081, () => {
    console.log(`Server is running on port 8081.`);
});