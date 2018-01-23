'use strict'
const Error = require('../../model/index').Error

class Errors {
  static async create (ctx) {
    let params = ctx.request.body
    let error = new Error()
    error.message = params.message
    error.stack = params.stack
    error.info = params.info
    error.save(() => {
    })
    ctx.response.status = 204
  }
}

module.exports = Errors
