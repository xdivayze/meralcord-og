import * as express from 'express'
import { IUser, UserModel } from './Model'

const router = express.Router()

router.post("/register", async(req: express.Request, res:express.Response) => {
  const body: IUser = req.body
  console.log(body)
  const foundUser = await UserModel.findOne({email:body.email})
  if (foundUser) {
    res.status(400).send({error: "user with same e mail exists"})
    return
  } 

  try {
    const createUser = async (payload: IUser) => {
      const mod = await UserModel.create(payload)
      await mod.save()
    }
    await createUser(req.body)
    res.status(202).send({success: true})
  } catch (err) {
    res.status(400).send({error: err})
  }
})

export {router}
