const {Schema, model} = require('mongoose')

const UserModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: ''
  },
  coverImage: {
    type: String,
    default: ''
  },
  followers: {
    type: Array,
  },
  followings: {
    type: Array,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  city: {
    type: String,
  },
  from: {
    type: String,
  },
  relationship: {
    type: Number,
    enum: ['1', '2', '3']
  }
}, {
  timestamps: true
})

module.exports = model("User", UserModel)