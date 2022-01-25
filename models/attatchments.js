import mongoose from 'mongoose'

const attachmentSchema = new mongoose.Schema({
  attachmentName: { type: String, required: false, unique: false },
  type: { type: String, required: false, unique: false },
  rangeModifier: { type: Number, required: false, unique: false },
  bulletVelocityModifier: { type: Number, required: false, unique: false },
  adsModifier: { type: Number, required: false, unique: false },
  verticalRecoil: { type: Number, required: false, unique: false },
  horizontalRecoil: { type: Number, required: false, unique: false },
  movementSpeed: { type: Number, required: false, unique: false },
  adsMovementSpeed: { type: Number, required: false, unique: false },
  sprintSpeed: { type: Number, required: false, unique: false },
  magSize: { type: Number, required: false, unique: false },
  hipfireArea: { type: Number, required: false, unique: false },
  sprintToFire: { type: Number, required: false, unique: false },
  tacSprintToFire: { type: Number, required: false, unique: false },
  reloadTime: { type: Number, required: false, unique: false },
  strafeSpeed: { type: Number, required: false, unique: false },
  fireRate: { type: Number, required: false, unique: false },
  weapons: { type: Array, required: false, unique: false }
}) 

const Attachment = mongoose.model('Attachment', attachmentSchema)

export default Attachment
