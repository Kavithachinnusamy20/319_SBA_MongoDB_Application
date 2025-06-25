import mongoose from 'mongoose'

const bookentrySchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        index: true // Frequently queried by title for search/autocomplete

    
    },
    genre: {
        type: String,
        index: true // Allows efficient filtering
    },
    author: {
        type: String,
        required: true
        
    }
    
    })

export default mongoose.model('BookEntry', bookentrySchema);