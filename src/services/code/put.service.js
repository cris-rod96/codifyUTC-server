import { Code } from '../../database/index.database.js'

const activateAccount = async (data) => {
  const { email, code } = data
  const codeFound = await Code.findOne({
    where: {
      code,
      email,
    },
  })

  if (!codeFound) {
    return { code: 400, message: 'El código no existe' }
  }

  if (codeFound && codeFound.used) {
    return { code: 400, message: 'El código ya fue utilizado' }
  }

  codeFound.used = true
  await codeFound.save()

  return { code: 200, message: 'Cuenta activada con éxito' }
}

const recoveryPassword = async (data) => {
  const { method, value, code } = data
  const codeFound = await Code.findOne({
    where: {
      code,
      [method === 'Email' ? 'email' : 'phone']: value,
    },
  })

  if (!codeFound) {
    return { code: 400, message: 'El código no existe' }
  }

  if (codeFound && codeFound.used) {
    return { code: 400, message: 'El código ya fue utilizado' }
  }

  codeFound.used = true
  await codeFound.save()

  return { code: 200, message: 'Código verificado con éxito' }
}

const resenCode = async (data) => {
  const { method, value, newCode, type } = data

  const codeFound = await Code.findOne({
    where: {
      [method === 'Email' ? 'email' : 'phone']: value,
      type,
    },
  })

  codeFound.used = false
  codeFound.code = newCode
  await codeFound.save()

  return { code: 200, message: 'Código reenviado' }
}

export { activateAccount, recoveryPassword, resenCode }
