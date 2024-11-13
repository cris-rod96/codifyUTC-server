import jwt from 'jsonwebtoken'
import { SECRET_WORD } from '../../consts/index.consts.js'

const { sign, verify } = jwt

const generateToken = (payload) =>
  sign(payload, SECRET_WORD, { expiresIn: '5h' })

const verifyToken = (token) => verify(token, SECRET_WORD)

export default {
  generateToken,
  verifyToken,
}
