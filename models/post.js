import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Example',
        alias: 't'
    },
    body: {
        type: String,
    },
    author: {
        type: String,
        required: true,
        alias: 'a'
    },
    email: {
        type: String,
        required: true,
        alias: 'e',
        unique: true
    }
})

export default mongoose.model('Post', postSchema, 'posts') //name of the model