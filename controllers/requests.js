import Weapon from '../models/weapons.js'
import Attachment from '../models/attatchments.js'
import { NotFound } from '../lib/error.js'

async function getAllWeapons(req, res) {
  try {
    const allGuns = await Weapon.find()
    return res.status(200).json(allGuns)
  } catch (err) {
    console.log(err)
  }
}

async function getAllAttachments(req, res) {
  try {
    const allAttachments = await Attachment.find()
    return res.status(200).json(allAttachments)
    } catch (err) {
    console.log(err)
  }
}

async function weaponCreate(req, res) {
  try {
    const newWeapon = await Weapon.create(req.body)
    console.log(req.body)
    return res.status(201).json(newWeapon)
  } catch (err) {
    console.log(err)
  }
}

async function attachmentCreate(req, res) {
  try {
    const newAttachment = await Attachment.create(req.body)
    console.log(req.body)
    return res.status(201).json(newAttachment)
  } catch (err) {
    console.log(err)
  }
}

async function weaponShow(req, res, next) {
  const { weaponId } = req.params
  try {
    const weapon = await Weapon.findById(weaponId)
    if (!weapon) throw new NotFound()
    return res.status(200).json(weapon)
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function weaponUpdate(req, res, next) {
  const { weaponId } = req.params
  try {
    const weaponToEdit = await Weapon.findById(weaponId)
    if (!weaponToEdit) throw new NotFound()
    Object.assign(weaponToEdit, req.body)
    await weaponToEdit.save()
    return res.status(202).json(weaponToEdit)
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function weaponDelete(req, res, next){
  const { weaponId } = req.params
  try {
    const weaponToDelete = await Weapon.findById(weaponId)
    if (!weaponToDelete) throw new NotFound()
    await weaponToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export default {
  index: getAllWeapons,
  indexAttatchments: getAllAttachments,
  show: weaponShow,
  create: weaponCreate,
  createAttachmentment: attachmentCreate,
  update: weaponUpdate,
  delete: weaponDelete,
}