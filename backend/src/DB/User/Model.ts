import { Document, Schema, model } from "mongoose"

interface IAuthorization {
  expiration: number,
  authCode: string
}

interface IUser extends Document {
  email: string,
  passwordHash: string,
  rsapub: string,
  authorizationCodes: Array<IAuthorization>
}

const UserSchema = new Schema({
  passwordHash: { type: String, required: true },
  email: { type: String, required: true },
  rsapub: { type: String, required: true },
  authorizationCodes: { type: Array<IAuthorization>, required: false }
})

const UserModel = model<IUser>("User", UserSchema)

export { UserModel, IUser }
