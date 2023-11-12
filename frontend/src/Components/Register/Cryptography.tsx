import * as crypto from 'crypto'

const CalculateECDH = (seed: string): string => {
  const hash = Buffer.from(crypto.createHash('sha256').update(seed).digest('hex'))
  const ecdh = crypto.createECDH('secp256k1')
  ecdh.setPrivateKey(hash)
  return ecdh.getPublicKey('hex')
}

export { CalculateECDH }
