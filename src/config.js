import path from 'path'

export default {
  port: 7080,
  views: path.resolve(__dirname, './views'),
  static: path.resolve(__dirname, './static'),
  public: path.resolve(__dirname, '../public')
}

