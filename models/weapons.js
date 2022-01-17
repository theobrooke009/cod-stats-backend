import mongoose from 'mongoose'
// import amax from '../images/guns/amax-image.png'


const damageRangeSchema = new mongoose.Schema({
  rangeStart: { type: Number, required: false, default: 0 },
  rangeEnd: { type: Number, required: false, default: 25 },
  headDamage: { type: Number, required: false, default: 54 },
  neckDamage: { type: Number, required: false, default: 42 },
  chestDamage: { type: Number, required: false, default: 35 },
  stomachDamage: { type: Number, required: false, default: 35 },
  extremetiesDamage: { type: Number, required: false, default: 35 },
})

const damageProfileSchema = new mongoose.Schema({
  profileName: { type: String, required: false, default: 'Default' },
  fireRate: { type: Number, required: false, default: 630 },
  magSize: { type: Number, required: false },
  rangeOne: [damageRangeSchema],
  rangeTwo: [damageRangeSchema],
  rangeThree: [damageRangeSchema],
  rangeFour: [damageRangeSchema],
})

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: false, unique: false, default: 'CR-56 AMAX' },
  weaponType: { type: String, required: false, unique: false, default: 'Assault Rifle' },
  image: { type: String, required: false, unique: false },
  gameFrom: { type: String, required: false, unique: false },
  adsTime: { type: Number, required: false, unique: false, default: 279  },
  sprintToFire: { type: Number, required: false, unique: false, default: 263  },
  movementSpeed: { type: Number, required: false, unique: false, default: 4.659  },
  bulletVelocity: { type: Number, required: false, unique: false, default: 587 },
  magSize: { type: Number, required: false, unique: false, default: 30 },
  strafeSpeed: { type: Number, required: false, unique: false, default: 2.83 },
  adsMovementSpeed: { type: Number, required: false, unique: false, default: 2.34 },
  tacSprintToFire: { type: Number, required: false, unique: false, default: 392 },
  hipfireArea: { type: Number, required: false, unique: false, default: 16.5 },
  reloadTime: { type: Number, required: false, unique: false, default: 2.25 },
  openBoltDelay: { type: Number, required: false, unique: false, default: 0 },
  sprintSpeed: { type: Number, required: false, unique: false, default: 6.2 },
  profileOne: [damageProfileSchema],
  profileTwo: [damageProfileSchema], 
  profileThree: [damageProfileSchema],
  profileFour: [damageProfileSchema], 
  profileFive: [damageProfileSchema],
  profileSix: [damageProfileSchema], 
})

const Weapon = mongoose.model('Weapon', weaponSchema)

export default Weapon