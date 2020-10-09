const db = require("../models");

module.exports = function(app) {

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

}