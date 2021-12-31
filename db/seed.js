import Weapon from "../models/weapons.js"
import Attachment from "../models/attatchments.js"
import weaponData from "./data/weapons.js"
import attachmentData from "./data/attachments.js"
import userData from "./data/users.js"
import { connectDB, truncateDB, disconnectDB } from "./helpers.js"
import SiteUser from "../models/siteUser.js"

async function seed() {
  try {
    await connectDB()
    console.log("Database is now connected")

    await truncateDB()
    console.log("Database is now dropped")

    const weapons = await Weapon.create(weaponData)
    const attachments = await Attachment.create(attachmentData)
    const users = await SiteUser.create(userData)
    console.log(`${weapons.length} weapons now added to the database`)
    console.log(`${attachments.length} attachments now added to the database`)
    console.log(`${users.length} user now added to the database`)
  } catch (err) {
    console.log(err)
    console.log("something went wrong - please see above error")
  }
}

seed()