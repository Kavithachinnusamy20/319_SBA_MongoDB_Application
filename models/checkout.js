import mongoose from 'mongoose';

const checkOutSchema = new mongoose.Schema({
 title : {
    type: String,
    required: true
  },
  author: {
      type: String,
      required: true
    },

  genre: {
    type :String,
  publishedYear: Number,
  available: {
    type: Boolean,
    default: true
  }
}
});
export default mongoose.model('checkOut', checkOutSchema);