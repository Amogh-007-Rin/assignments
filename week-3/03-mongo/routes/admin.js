const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // This code represents admin signup logic 
    const username = req.body.username;
    const password = req.body.password;

     await Admin.create({
        username:username,
        password:password
     })

     res.json({
        message:"Admin Created Successfully"
     })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // This code-block represents course creation logic
    const title = req.body.title;
    const discription = req.body.discription;
    const imageLink = req.body.imageLink;
    const prize = req.body.prize;
    const courseTeacher = req.body.courseTeacher

    const newCourse = await Course.create({
        title,
        discription,
        imageLink,
        prize,
        courseTeacher
    })

    res.json({
        message : "course created sucessfully", courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // This code-block represents the available course display logic  
    const response = await Course.findOne({});

      res.json({
        courses : response
      })
});

module.exports = router;