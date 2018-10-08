const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

const routes = require("./routes/api.js");
app.use(routes);

//app.use(express.static("client/build"));

// require("./routes/api.js")(app);

app.listen(PORT, function(){
        console.log();
})
