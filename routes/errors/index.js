'use strict'

const Errors = require('../../controller/errors/index')
const router = require('koa-router')()

router
  .prefix('/errors')
  .post('/create', Errors.create)


module.exports = router
