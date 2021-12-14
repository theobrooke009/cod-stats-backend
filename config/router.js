import express from 'express'
import request from '../controllers/requests.js'


const router = express.Router()

router.route('/weapons')
  .post(request.create)
  .get(request.index)

router.route('/weapons/:weaponId')
  .get(request.show)
  .put(request.update)
  .delete(request.delete)
  



export default router