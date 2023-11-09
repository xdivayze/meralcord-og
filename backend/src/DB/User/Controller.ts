import * as express from 'express'
import { IUser, UserModel } from './Model'
import * as crypto from 'crypto'
import { DEFAULT_EXPIRATION_TIME } from '../constants'

const router = express.Router()

router.post("/register", async (req: express.Request, res: express.Response) => {
  const body: IUser = req.body
  console.log(body)
  const foundUser = await UserModel.findOne({ email: body.email }).exec()
  if (foundUser) {
    res.status(400).send({ error: "user with same e mail exists" })
    return
  }

  try {
    const createUser = async (payload: IUser) => {
      const mod = await UserModel.create(payload)
      await mod.save()
    }
    await createUser(req.body)
    res.status(202).send({ success: true })
    return
  } catch (err) {
    res.status(400).send({ error: err })
    return
  }
})

router.get("/login", async (req: express.Request, res: express.Response) => {
  const email = req.headers.email
  const passwdHash = req.headers.passwordhash
  console.log(req.headers)
  if (!email || !passwdHash) {
    res.status(400).send(
      { "error": `required headers are not included ${JSON.stringify({ email, passwdHash })}` }
    )
    return
  }

  const foundUser = await UserModel.findOne({ email }).exec()
  if (!foundUser) {
    res.status(400).send({ "error": "user not found" })
    return
  }
  const passwdHashFound = foundUser.get("passwordHash")
  if (!passwdHashFound) {
    res.status(400).send({ "error": "password hash was not found on found user" })
    return
  }
  if (passwdHashFound !== passwdHash) {
    res.status(400).send({ "error": "passwords don't match" })
    return
  } else {
    const authCode = crypto.randomBytes(16).toString('hex')
    foundUser.authorizationCodes.push({
      authCode,
      expiration: Math.floor(Date.now() / 1000) + DEFAULT_EXPIRATION_TIME
    })
    foundUser.save()
    res.status(202).send({
      "success": true,
      "authorizationCode": authCode
    })
    return
  }



})

export { router }
