const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
// process.env.NODE_ENV => PRODUCTION OR UNDEFINED

//middleware

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  //serve static files
  app.use(express.static(path.join(__dirname, "client/build")));
}

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
