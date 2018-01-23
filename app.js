const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session2')
const passport = require('./passport_config')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const xauth = require('./routes/xauth')
const errors = require('./routes/errors/index')

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(session({key: "SESSIONID"}))
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(passport.initialize())
app.use(passport.session())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(xauth.routes(), xauth.allowedMethods())
app.use(errors.routes(), errors.allowedMethods())

module.exports = app
