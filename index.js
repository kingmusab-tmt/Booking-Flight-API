const express = require("express");
const {json} = require("express");
const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
const flight = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/flight", flight);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
  res.send("Musab is Testing");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
