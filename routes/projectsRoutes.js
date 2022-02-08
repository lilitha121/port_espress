const express = require("express");


const app = express.Router()


let projects =[
     {
  id: 1,
  title: "Calculator",
  github: "https://github.com/lilitha121/Calculator",
  live: "https://ngele-calculator.netlify.app",
  image: "https://media.takealot.com/covers/9696236/cover-pdpxl.jpg",
},
{
  id: 2,
  title: "Calculator",
  github: "https://github.com/lilitha121/Calculator",
  live: "https://ngele-calculator.netlify.app",
  image: "https://media.takealot.com/covers/9696236/cover-pdpxl.jpg",
},
{
  id: 3,
  title: "Calculator",
  github: "https://github.com/lilitha121/Calculator",
  live: "https://ngele-calculator.netlify.app",
  image: "https://media.takealot.com/covers/9696236/cover-pdpxl.jpg",
},

];
// GET ALL PROJECTS
app.get("/", (req, res) => {
  res.send(projects);
});
// GET ONE PROJECT
app.get("/:id", (req, res) => {
  const project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ msg: "Project not found" });
  res.send(project);
});


// CREATE A PROJECT (push to array)
app.post("/", (req, res) => {
  let { title, github, live, image, } = req.body;
  if (!title || !github || !live ||!image)
    res.status(400).send({ msg: "Not all information sent" });
  
  let newProject = {
    id: projects.length + 1,
    title,
    github,
    live,
    image,
  };
  projects.push(newProject);
  res.send(newProject);
});



// UPDATE A PROJECT (update item in array)
app.put("/:id", (req, res) => {
  // FIND PROJECT INDEX IN PROJECTS
  let project = projects.find((project) => project.id == req.params.id);
  // IF NO PROJECT FOUND, SEND ERROR
//   if (!project) res.status(404).send({ msg: "Project not found" });
  // GET DATA FROM REQUEST BODY
  let { title, github, live , image} = req.body;

  // WRITE DETAILS TO PROJECT
  if (title) project.title = title;
  if (github) project.github = github;
  if (live) project.live = live;
  if (image) project.image = image;
  // SEND UPDATED PROJECT
  res.send(project);
});
// DELETE A PROJECT (remove from array)
app.delete("/:id", (req, res) => {
  project = projects.filter((projects) => project.id != req.params.id);
  fixedArrayId(projects);
  res.send({ msg: "Delete each name" });
});
module.exports = app;