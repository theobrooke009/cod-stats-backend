import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const siteUserSchema = new mongoose.Schema({
  username: { type: String, unique: true, maxlength: 50, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
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