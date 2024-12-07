import { Code } from '../../database/index.database.js'

const registerCode = async (data) => {
  const codeActivation = await Code.create(data)
  return { code: 200, codeActivation }
}

export default registerCode
