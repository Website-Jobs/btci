const express = require("express");
const next = require("next");
require("dotenv").config(".env.local");
const { connection, connect } = require("mongoose");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();



const ApiV1Router = require("./routers/api/v1")

app.prepare().then(() => {

  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({
    extended: true
  }))



  server.use("/api/v1/", ApiV1Router)


  server.get("*", (req, res) => {
    return handler(req, res);
  });

  const uri = process.env.MONGOOSE_URI || "mongodb://localhost:27017/SHQDB_LOCAL";
  connect(uri, {
    useNewUrlParser: true
  }).then((result) => {
    console.log("> MongoDb is ready");
  }).catch((err) => {
    console.log("> MongoDb failed");
  })

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on PORT 3000");
  });
})
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
