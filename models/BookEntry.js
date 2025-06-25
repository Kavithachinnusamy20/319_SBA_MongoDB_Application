import mongoose from 'mongoose'

const bookentrySchema = new mongoose.Schema({
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

export default mongoose.model('BookEntry', bookentrySchema);