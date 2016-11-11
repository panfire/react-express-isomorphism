import createRequest from './request'
import config from '../config'

let host = ''

if (typeof window !== 'object') {
  host = `http://localhost:${config.port}`
}

const request = createRequest(host)

export function fetchList() {
  return request.get('/api/list')
}
