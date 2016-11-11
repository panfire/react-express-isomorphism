import index from '../controller/index'
import api from '../controller/api'
import react from '../controller/react'

export default function routes(app) {
  // app.use('/', index)
  app.use('/api', api)
  app.use('/', react)
}
