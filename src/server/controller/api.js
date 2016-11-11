import { Router } from 'express'

const router = Router()

router.get('/list', (req, res, next) => {
  let list = [
  	'this is a',
  	'this is b',
  	'this is c'
  ]

  res.json(list)
})

export default router