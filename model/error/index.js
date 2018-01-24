'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
  message: String,
  stack: String,
  info: String,
  ip: String,
  accId: Number,
  ua: String,
  token: String,
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({create_at: 1})

module.exports = mongoose.model('Error', schema)
