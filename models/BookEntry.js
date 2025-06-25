import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    
    },
    genre: {
        type: String,
    },
    author: {
        type: String,
        required: true
        
    }
    
    })

export default mongoose.model('BookEntry', postSchema, 'BookEntry') //name of the model