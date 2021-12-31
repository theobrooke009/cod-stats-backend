import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const attachEquipPerksSchema = new mongoose.Schema({
  image: { type: String, required: false, unique: false },
  name: { type: String, required: false, unique: false },
})

const weaponSchema = new mongoose.Schema({
  image: { type: String, required: false, unique: false },
  name: { type: String, required: false, unique: false },
  type: { type: String, required: false, unique: false },
  muzzle: [attachEquipPerksSchema],
  barrel: [attachEquipPerksSchema],
  laser: [attachEquipPerksSchema],
  optic: [attachEquipPerksSchema],
  stock: [attachEquipPerksSchema],
  underBarrel: [attachEquipPerksSchema],
  ammunition: [attachEquipPerksSchema],
  rearGrip: [attachEquipPerksSchema],
  perk: [attachEquipPerksSchema],
})

const customClassSchema = new mongoose.Schema({
  primary: [weaponSchema],
  secondary: [weaponSchema],
  perkOne: [attachEquipPerksSchema],
  perkTwo: [attachEquipPerksSchema],
  perkThree: [attachEquipPerksSchema],
  lethal: [attachEquipPerksSchema],
  tactical: [attachEquipPerksSchema]
})



const siteUserSchema = new mongoose.Schema({
  username: { type: String, unique: true, maxlength: 50, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  customOne: [customClassSchema],
  customTwo: [customClassSchema],
  customThree: [customClassSchema],
  customFour: [customClassSchema],
  customFive: [customClassSchema],
  customSix: [customClassSchema],
  customSeven: [customClassSchema],
  customEight: [customClassSchema],
  customNine: [customClassSchema],
  customTen: [customClassSchema],
})

siteUserSchema.set('toJSON', {
  transform(_doc, json) {
    delete json.password
    return json
  }
})

siteUserSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

siteUserSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

siteUserSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

siteUserSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

siteUserSchema.plugin(mongooseUniqueValidator)

const SiteUser = mongoose.model('SiteUser', siteUserSchema)

export default SiteUser