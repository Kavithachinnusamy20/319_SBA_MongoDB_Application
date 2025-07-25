import mongoose from 'mongoose'
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true

    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
     password: {
        type: String,
        required: true,
        minLength: 8
    },
     createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('User', userSchema)