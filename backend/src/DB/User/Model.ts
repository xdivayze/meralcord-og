import { Document, Schema, model } from "mongoose"

interface IUser extends Document {
  email: string,
  passwordHash: string,
  rsapub: string
}

const UserSchema = new Schema({
  passwordHash: { type: String, required: true },
  email: { type: String, required: true },
  rsapub: {type: String, required: true}
})

const UserModel = model<IUser>("User", UserSchema)

export {UserModel, IUser}
