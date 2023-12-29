const playerRouter = require("./routes/players");

const express = require("express");
const app = express();
const port = 3000;

app.use("/players", playerRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`Golf app listening on port ${port}!`);
});
