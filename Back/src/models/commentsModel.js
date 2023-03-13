import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },
  blogId: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  
}, {
  timestamps: true
});

export default mongoose.model('Comment', commentSchema);
