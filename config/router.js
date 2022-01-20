import express from 'express'
import request from '../controllers/requests.js'
import userRequest from '../controllers/userWeapons.js'
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
  .post(secureRoute, userRequest.createClass)

router.route('/attachments')
  .get(request.indexAttatchments)
  .post(request.createAttachmentment)

router.route('/user/:userId')
  .get(request.user)

router.post('/register', auth.register)
router.post('/login', auth.login)

router.route('/profile')
  .get(secureRoute, auth.profile)

router.route('/userweapons')
  .get(secureRoute, userRequest.userWeapons)

router.route('/userweapons/:userWeaponId')
  .get(secureRoute, userRequest.userWeaponShow)
  .post(secureRoute, userRequest.likeClass)
  .delete(secureRoute, userRequest.deleteClass)




export default router