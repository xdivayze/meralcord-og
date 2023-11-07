import { Document, Schema } from "mongoose"

interface IUser extends Document {
  identifier: string,
  passwordHash: string,
  username: string,
  email: string,
}

const UserSchema = new Schema({
  identifier: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true }
})

UserSchema.pre("save",)
