import mongoose from 'mongoose'



const perkOneSchema = new mongoose.Schema({
  name: { type: String, unique: false, required: true, default: 'Double Time' },
  image: { type: String, unique: false, required: true },
  tier: { type: Number, unique: false, required: true, default: 1 },
  description: { type: String, unique: false, required: false, maxlength: 1000, default: 'Double the duration of Tactical Sprint. Increase crouch movement speed by 30%' }
})

const perkTwoSchema = new mongoose.Schema({
  name: { type: String, unique: false, required: true, default: 'Restock' },
  image: { type: String, unique: false, required: true },
  tier: { type: Number, unique: false, required: true, default: 3 },
  description: { type: String, unique: false, required: false, maxlength: 1000, default: 'Recharge equipment over 25 seconds. stims recharge in 15.' }
})

const perkThreeSchema = new mongoose.Schema({
  name: { type: String, unique: false, required: true, default: 'Tune Up' },
  image: { type: String, unique: false, required: true },
  tier: { type: Number, unique: false, required: true, default: 3 },
  description: { type: String, unique: false, required: false, maxlength: 1000, default: 'Increase the charge rate of field upgrades by 40%.' }
})

const PerkOne = mongoose.model('PerkOne', perkOneSchema)

const PerkTwo = mongoose.model('PerkTwo', perkTwoSchema)

const PerkThree = mongoose.model('PerkThree', perkThreeSchema)

export default {
  perkOne: PerkOne,
  perkTwo: PerkTwo,
  perkThree: PerkThree,
  schemaOne: perkOneSchema,
  schemaTwo: perkTwoSchema,
  schemaThree: perkThreeSchema,
}

