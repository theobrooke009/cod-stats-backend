import { NotFound, Unauthorized } from '../lib/error.js'
import UserAddedClass from '../models/userCreatedClasses.js'

async function getAllUserWeapons(req, res) {
  try {
    const allGuns = await UserAddedClass.find({...req.body})
    console.log('body', req.body)
    return res.status(200).json(allGuns)
  } catch (err) {
    console.log(err)
  }
}

async function userWeaponShow(req, res, next) {
  const { userWeaponId } = req.params
  try {
    const userWeapon = await UserAddedClass.findById(userWeaponId)
    if (!userWeapon) throw new NotFound()
    return res.status(200).json(userWeapon)
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function classCreate(req, res) {
  const { currentUser } = req
  try {
    const newClass = await UserAddedClass.create({ ...req.body, addedBy: currentUser })
    console.log(req.body)
    return res.status(201).json(newClass)
  } catch (err) {
    console.log(err)
  }
}

async function likeClass(req, res, next){
  const { userWeaponId } = req.params
  const { currentUserId, currentUser } = req

  try {
    const weaponToLike = await UserAddedClass.findById(userWeaponId).populate('likedBy')

    if (!weaponToLike) throw new NotFound()

    if(weaponToLike.likedBy.find(user => currentUserId.equals(user._id))) {
      weaponToLike.likedBy.remove(currentUserId)
    } else {
      weaponToLike.likedBy.push(currentUser)
    }

    await weaponToLike.save()
    console.log(weaponToLike.likedBy)

    return res.status(202).json(weaponToLike)
  } catch (err) {
    next(err)
  }
}

async function deleteClass(req, res, next) {
  const { userWeaponId } = req.params
  console.log('params are here', req.params)
  const { currentUserId } = req
  try {
    const deleteWeapon = await UserAddedClass.findById(userWeaponId)
    if (!deleteWeapon) throw new NotFound()
  
    if (!deleteWeapon.addedBy.equals(currentUserId)) {
      throw new Unauthorized()
    }

    await deleteWeapon.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}



export default {
  userWeapons: getAllUserWeapons,
  userWeaponShow: userWeaponShow,
  createClass: classCreate,
  likeClass: likeClass,
  deleteClass: deleteClass,
}