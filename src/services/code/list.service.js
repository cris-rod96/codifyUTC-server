import { Code, User } from '../../database/index.database.js'
import randomString from 'randomstring'
import { nodemailerHelper } from '../../helpers/index.helpers.js'
const userExists = async (email) => {
  const user = await User.findOne({
    where: {
      email,
      isDeleted: false,
    },
  })

  return user
}

const requestCode = async (email) => {
  const userFound = await userExists(email)

  if (!userFound) return { code: 400, message: 'Usuario no encontrado.' }

  if (userFound.isActive)
    return { code: 400, message: 'Su cuenta ya esta activa. Inicie sesión.' }

  const codeString = randomString.generate({
    length: 4,
    charset: 'numeric',
  })

  const [updateCode] = await Code.update(
    {
      code: codeString,
    },
    {
      where: {
        email: email,
        type: 'Activation',
      },
    }
  )

  if (updateCode > 0) {
    nodemailerHelper.resendCode(email, userFound.full_name, codeString)

    return {
      code: 200,
      message: 'Código enviado al correo electrónico',
      userData: {
        email: userFound.email,
        full_name: userFound.full_name,
      },
    }
  }

  return { code: 400, message: 'Error al enviar código. Intenta de nuevo' }
}

export default requestCode
