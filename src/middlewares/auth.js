import redisController from '../controllers/redis.controller'

module.exports = (req, res, next) => {
     if (redisController.getKey('logado')) {
          return next()
     }

}
