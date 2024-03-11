const PASSWORD = require('./credentials').PASSWORD;
const mongoose = require('mongoose');

const DB = `mongodb+srv://sanjuyb97:${PASSWORD}@cluster0.i5krhma.mongodb.net/my_db?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(DB, {
}).then(() => {
    console.log('DB conneted')
}).catch (() => {
    console.log('error')
})

// schema (class)
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default:Date.now},
    isPublished: Boolean,
    rating: Number
})

// model (constructor)
const Course = mongoose.model('course', courseSchema)

// create document

async function createCourse() {
    // object
    const course = new Course({
        name:'Mern full stack',
        creator : 'Sanju',
        isPublished: true,
        rating: 5.0
    })
   const courseCreated  = await course.save();
   console.log(courseCreated)
}

createCourse()