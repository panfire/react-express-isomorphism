import superagent from 'superagent'

class Request {
  constructor(method, url) {
    this.req = superagent[method](url)
  }
  set(headers) {
    this.req.set(headers)
    return this
  }
  query(query) {
    this.req.set(query)
    return this
  }
  send(body) {
    this.req.send(body)
    return this
  }
  attach(field, file) {
    this.req.attach(field, file)
    return this
  }
  auth(clientId, clientSecret) {
    this.req.auth(clientId, clientSecret)
    return this
  }
  end() {
    return new Promise((resolve, reject) => {
      this.req.end(function(err, {body = {}}) {
        if (err) {
          let e = new Error(body.message || '接口错误')
          e.status = err.status || 500
          return reject(e)
        }
        resolve(body)
      })
    })
  }
  then(cb) {
    return this.end().then(cb)
  }
  catch (cb) {
    return this.end().catch(cb)
  }
}

export default function createRequest(host = '') {
  let request = {}
  function createMethod(method) {
    return url => {
      return new Request(method, host + url)
    }
  }
  ['get', 'post', 'del', 'put', 'patch'].forEach(method => {
    request[method] = createMethod(method)
  })

  return request
}
