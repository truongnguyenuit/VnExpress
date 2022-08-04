const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  url: {
    type: String
  },
  status: {
    type: String,
    enum: ['To learn', 'Learning', 'Learn ed']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'

  }
})

module.exports = mongoose.model('posts', PostSchema)