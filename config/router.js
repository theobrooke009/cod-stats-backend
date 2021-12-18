import express from 'express'
import request from '../controllers/requests.js'

const router = express.Router()

router.route('/weapons')
  .post(request.create)
  .get(request.index, request.indexAttatchments)
  .get(request.indexAttatchments)

router.route('/weapons/:weaponId')
  .get(request.show)
  .put(request.update)
  .delete(request.delete)

router.route('/weapons/:weaponId/build')
  .get(request.indexAttatchments)

 

router.route('/attachments')
  .get(request.indexAttatchments)
  .post(request.createAttachmentment)


export default router