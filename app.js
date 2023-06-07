const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errrorHnadlerMiddleware = require("./middleware/errror-handler");

const app = express();

//middlewares
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errrorHnadlerMiddleware);
//
port=process.env.PORT||3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
