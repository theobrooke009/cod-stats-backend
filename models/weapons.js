import mongoose from 'mongoose'

const damageRangeSchema = new mongoose.Schema({
  rangeStart: { type: Number, required: false },
  rangeEnd: { type: Number, required: false },
  headDamage: { type: Number, required: false },
  neckDamage: { type: Number, required: false },
  chestDamage: { type: Number, required: false },
  stomachDamage: { type: Number, required: false },
  extremetiesDamage: { type: Number, required: false },
})

const damageProfileSchema = new mongoose.Schema({
  profileName: { type: String, required: false },
  fireRate: { type: Number, required: false },
  rangeOne: [damageRangeSchema],
  rangeTwo: [damageRangeSchema],
  rangeThree: [damageRangeSchema],
  rangeFour: [damageRangeSchema],
})

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: false, unique: false },
  weaponType: { type: String, required: false, unique: false },
  image: { type: String, required: false, unique: false },
  adsTime: { type: Number, required: false, unique: false  },
  sprintToFire: { type: Number, required: false, unique: false  },
  movementSpeed: { type: Number, required: false, unique: false  },
  bulletVelocity: { type: Number, required: false, unique: false  },
  magSize: { type: Number, required: false, unique: false  },
  strafeSpeed: { type: Number, required: false, unique: false  },
  adsMovementSpeed: { type: Number, required: false, unique: false  },
  tacSprintToFire: { type: Number, required: false, unique: false  },
  hipfireArea: { type: Number, required: false, unique: false  },
  reloadTime: { type: Number, required: false, unique: false  },
  openBoltDelay: { type: Number, required: false, unique: false  },
  sprintSpeed: { type: Number, required: false, unique: false  },
  profileOne: [damageProfileSchema],
  profileTwo: [damageProfileSchema], 
})

const Weapon = mongoose.model('Weapon', weaponSchema)

export default Weapon