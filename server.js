// Dependencies
var express = require("express");
var bodyParser =require("body-parser");


// body-parser boilerplate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));