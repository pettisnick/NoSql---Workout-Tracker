const db = require("../models");

const router = require("express").Router();

//Create a new workout
router.post("/api/workouts", (req, res) => {
    //create workout
    db.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

//Continue w/old workout
router.get("/api/workouts", (req, res) => {
    //find all the workouts
    db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });



//Add exercises
router.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});


//View the combined weight of multiple exercises on 'stats' page
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;