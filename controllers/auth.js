import SiteUser from '../models/siteUser.js'
import { NotFound, Unauthorized } from '../lib/error.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function registerUser(req, res, next) {
  try {
    const createdUser = await SiteUser.create(req.body)
    console.log(createdUser)
    return res.status(201).json({ message: `Welcome ${createdUser.username}`
    })
  } catch (err) {
    next(err)
  }
}

async function loginUser(req, res, next) {
  try {
    const userToLogin = await SiteUser.findOne({ email: req.body.email })
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Unauthorized()
    }

    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })

    return res.status(202).json({
      message: `welcome back ${userToLogin.username}`,
      userToLogin,
      token,
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function profileShow(req, res, next) {
  const { currentUserId } = req
  try {
    const user = await SiteUser.findById(currentUserId)
    if (!user) throw new NotFound()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export default {
  register: registerUser,
  login: loginUser,
  profile: profileShow
}