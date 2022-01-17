import mongoose from 'mongoose'

const customClassSchema = new mongoose.Schema({
  profile: { type: String, required: false },
  name: { type: String, required: false },
  gunName: { type: String, required: false },
  gamefrom: { type: String, required: false },
  image: { type: String, required: false },
  muzzle: { type: String, required: false },
  barrel: { type: String, required: false },
  laser: { type: String, required: false },
  optic: { type: String, required: false },
  stock: { type: String, required: false },
  underBarrel: { type: String, required: false },
  ammunition: { type: String, required: false },
  rearGrip: { type: String, required: false },
  perk: { type: String, required: false },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})

const UserCreatedClass = mongoose.model('UserCreatedClass', customClassSchema )

export default UserCreatedClass