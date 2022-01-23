import mongoose from 'mongoose'

const customClassSchema = new mongoose.Schema({
  profile: { type: String, required: false },
  name: { type: String, required: false },
  gunName: { type: String, required: false },
  gameFrom: { type: String, required: false },
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
  weaponType: { type: String, required: false},
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'SiteUser', required: true, timestamps: true },
  likedBy: [{ type: mongoose.Schema.ObjectId, ref: 'SiteUser', required: true }],
  addedAt : { type : Date, default: Date.now }
})

const UserAddedClass = mongoose.model('UserAddedClass', customClassSchema )

export default UserAddedClass