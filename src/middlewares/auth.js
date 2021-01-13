import redisController from '../controllers/redis.controller'

module.exports = (req, res, next) => {
     if (redisController.getKey('token')) {
          return next()
     } else {
          res.redirect(`${process.env.FRONTEND_HOST}/login`)
     }

}
