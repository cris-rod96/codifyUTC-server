import bcryptjs from 'bcryptjs'

const { hash, compare } = bcryptjs

const hashPassword = async (password) => await hash(password, 13)

const comparePassword = async (password, passwordHashed) =>
  await compare(password, passwordHashed)

export default {
  hashPassword,
  comparePassword,
}
