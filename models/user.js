import mongoose from 'mongoose'
import Weapon from './weapons.js'
import perk from './perks.js'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'



const weaponAttachmnentSchema = new mongoose.Schema({
  name: { type: String, required: false, unique: false},
  image: { type: String, required: false, unique: false},
})

const primaryWeaponSchema = new mongoose.Schema({
  name: { type: String, required: false, unique: false },
  image: { type: String, required: false, unique: false },
  muzzle: [weaponAttachmnentSchema],
  underBarrel: [weaponAttachmnentSchema],
  barrel: [weaponAttachmnentSchema],
  optic: [weaponAttachmnentSchema],
  ammunition: [weaponAttachmnentSchema],
  stock: [weaponAttachmnentSchema],
  laser: [weaponAttachmnentSchema],
  rearGrip: [weaponAttachmnentSchema],
  perk: [weaponAttachmnentSchema],  
})

const secondaryWeaponSchema = new mongoose.Schema({
  name: { type: String, required: false, unique: false },
  image: { type: String, required: false, unique: false },
  muzzle: [weaponAttachmnentSchema],
  barrel: [weaponAttachmnentSchema],
  optic: [weaponAttachmnentSchema],
  ammunition: [weaponAttachmnentSchema],
  stock: [weaponAttachmnentSchema],
  laser: [weaponAttachmnentSchema],
  rearGrip: [weaponAttachmnentSchema],
  perk: [weaponAttachmnentSchema],  
})

const customClassSchema = new mongoose.Schema({
  primaryWeapon: [primaryWeaponSchema],
  secondaryWeapon: [secondaryWeaponSchema],
  perkOne: [perk.schemaOne],
  perkTwo: [perk.schemaTwo],
  perkThree: [perk.schemaThree],
})

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, maxlength: 50, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  customClassOne: [customClassSchema],
  customClassTwo: [customClassSchema],
  customClassThree: [customClassSchema],
  customClassFour: [customClassSchema],
  customClassFive: [customClassSchema],
  customClassSix: [customClassSchema],
  customClassSeven: [customClassSchema],
  customClassEight: [customClassSchema],
  customClassNine: [customClassSchema],
  customClassTen: [customClassSchema],
})

userSchema.set('toJSON', {
  transform(_doc, json) {
    delete json.password
    return json
  }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(mongooseUniqueValidator)

const User = mongoose.model('User', userSchema)

export default User