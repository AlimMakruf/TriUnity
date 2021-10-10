"use strict"
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./routes");
const handlerError = require("./middlewares/handlerError");
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(mainRouter);
app.use(handlerError);

app.listen(port, () => console.log(`Running server on port ${port}`));
