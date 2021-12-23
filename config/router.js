import express from 'express'
import request from '../controllers/requests.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/weapons')
  .post(secureRoute ,request.create)
  .get(request.index)
 

router.route('/weapons/:weaponId')
  .get(request.show)
  .put(request.update)
  .delete(request.delete)

router.route('/weapons/:weaponId/build')
  .get(request.indexAttatchments)


router.route('/attachments')
  .get(request.indexAttatchments)
  .post(request.createAttachmentment)

router.post('/register', auth.register)
router.post('/login', auth.login)




export default router