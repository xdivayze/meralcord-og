import { mongoose, MONGO_URL } from "../main"

const init = async () => {
  await mongoose.connect(MONGO_URL)
  mongoose.connection.on('connected', () => {
    console.log('connection success')
  })
  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error : ${err}`)
  })
  mongoose.connection.on('disconnected', () => { console.log('mongoose disconnected') })

}

export default init
