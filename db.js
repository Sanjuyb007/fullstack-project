
const PASSWORD = require('./credentials').PASSWORD
const mongoose = require('mongoose')
const DB = `mongodb+srv://sanjuyb97:${PASSWORD}@cluster0.i5krhma.mongodb.net/my_db?retryWrites=true&w=majority&appName=Cluster0`;



// const DB = `mongodb+srv://sanchittanwar1:${PASSWORD}@cluster0.bzn1zyg.mongodb.net/my_db?retryWrites=true&w=majority`

mongoose.connect(DB, {
}).then(() => {
    console.log('DB Server connected')
}).catch(err => {
    console.log('Error connecting to DB: ', err)
})

