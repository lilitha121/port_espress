const express = require("express");
projectsRoutes = require("./routes/projectsRoutes");
// const res = require("express/lib/response");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to Lilitha's Backend" });
});

app.use("/projects", projectsRoutes);
app.listen(5000);
