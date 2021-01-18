
function authMiddleware(o, next) {
    // if (redisController.getKey('token')) {
          next()
    // } else {
         // res.redirect(`${process.env.FRONTEND_HOST}/login`)
   //       next({some: 'error'})
   //  }
}

export default  authMiddleware
