import { mongoose, MONGO_URL } from "../main"
import { UserModel } from "./User/Model"

const init = async () => {
  await mongoose.connect(MONGO_URL)
  
  await mockTest()

  mongoose.connection.on('connected', () => {
    console.log('connection success')
  })
  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error : ${err}`)
  })
  mongoose.connection.on('disconnected', () => { console.log('mongoose disconnected') })

}

const mockTest = async () => {
  const UserTest = new UserModel({
    email:"duck@duck.com",
    passwordHash: "i am a password hash",
    rsapub: "i am a rsa public key"
  })
  await UserTest.save()
}

export default init
