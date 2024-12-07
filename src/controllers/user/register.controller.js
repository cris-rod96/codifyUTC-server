import { codeService, userService } from '../../services/index.services.js'
import { bcryptUtl } from '../../utils/index.utils.js'
import {
  cloudinaryHelper,
  nodemailerHelper,
  twilioHelper,
} from '../../helpers/index.helpers.js'
import randomstring from 'randomstring'

const registerUser = async (req, res) => {
  try {
    const { password } = req.body
    const image = req.file

    let profile_picture = null
    if (image) {
      profile_picture = await cloudinaryHelper.uploadImage(
        'users',
        image.buffer,
        image.originalname
      )
    }

    const passwordHashed = await bcryptUtl.hashPassword(password)

    const { code, user, message } = await userService.registerUser({
      ...req.body,
      password: passwordHashed,
      profile_picture,
    })

    if (user) {
      const code = randomstring.generate({
        length: 4,
        charset: 'numeric',
      })

      await codeService.registerCode({
        code,
        email: user.email,
        type: 'Activation',
        method: 'Email',
      })
      nodemailerHelper.welcome(user.email, user.full_name, code)
      // twilioHelper.sendMessage(user.phone, code)
    }

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerUser
