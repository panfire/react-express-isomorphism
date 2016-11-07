import index from '../controller/index'

export default function routes(app) {
  app.use('/', index);
}
