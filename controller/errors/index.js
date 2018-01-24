'use strict'
const Error = require('../../model/index').Error

class Errors {
  static async create (ctx) {
    let params = ctx.request.body
    let error = new Error()
    error.message = params.message
    error.stack = params.stack
    error.info = params.info
    error.ua = params.ua
    error.token = params.token
    error.save(() => {
    })
    ctx.response.status = 204
  }

  static async list (ctx) {
    let params = ctx.request.body
    let page = params.page || 0
    let pageSize = 50
    let result = await Error.find({}).sort({create_at: -1}).skip(page * pageSize).limit(pageSize).exec((err, result) => {
      return result
    })
    ctx.body = result
  }
}

module.exports = Errors
