'use strict'

const Errors = require('../../controller/errors/index')
const router = require('koa-router')()

router
  .prefix('/errors')
  .post('/create', Errors.create)
  .get('list', Errors.list)


module.exports = router
