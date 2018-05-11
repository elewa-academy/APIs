var express = require("express")
var app = express()

// using body-parser
let parse_http = require("./parse-http");
app.use(parse_http);

let calc_service = require("./calc-service");
app.use("/calculator", calc_service)

let notes_service = require("./notes-service");
app.use("/notes", notes_service)

// process.env.PORT || 3000 - preview of coming attractions
let env_vars = require("./env-vars");
app.listen(env_vars.PORT, function() {
    console.log("litening in port ", env_vars.PORT)
})




