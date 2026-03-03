require("dotenv").config();
require("module-alias/register");

const express = require("express");
const responseFormat = require("@/middlewares/responseFormat");
const errorHandler = require("@/middlewares/errorHandler");
const notFoundHandler = require("@/middlewares/notFoundHandler");
const app = express();
const port = 3000;
const apiRouter = require("@/routes");

app.use(responseFormat);
app.use("/api", apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
