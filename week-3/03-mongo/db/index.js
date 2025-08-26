const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(' mongodb+srv://AmoghDath:Egoistisagiyoichi@28@uialpha.udvodoi.mongodb.net/courses-p');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    discription: String,
    imageLink: String,
    prize: Number,
    courseTeacher: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}