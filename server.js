const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//gives access to 'db.workout and means you have code in index.js
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//Create a new workout
app.post("/api/workouts", (req, res) => {
  //create workout
  const workout = req.body;
  db.Workout.create(workout)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Continue w/old workout
app.get("/api/workouts",)
db.Workout.



//Add exercises to previous workout plan
app.put("/api/workouts/:id", (req, res) => {
  console.log(req.params);
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
  .then((dbWorkout) => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch((err) => {
     res.json(err);
  });
});

//Add new exercises to new workout plan
app.put("/api/workouts/:id", ({ body }, res) => {
  db.Workout.
})
//View the combined weight of multiple exercises on 'stats' page


//Create routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});