import mongoose from 'mongoose'


const lethalSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, default: "Frag Grenade" },
  nadeType: { type: String, unique: false, required: true, default: "Lethal"},
  image: { type: String, unique: false, required: false},
})

const tacticalSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, default: "Stun Grenade" },
  nadeType: { type: String, unique: false, required: true, default: "Lethal"},
  image: { type: String, unique: false, required: false },
})

const Lethal = mongoose.model('Lethal', lethalSchema)
const Tactical = mongoose.model('Tactical', tacticalSchema)

export default {
  lethal: Lethal,
  tactical: Tactical,
}
