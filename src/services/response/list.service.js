import { Response } from '../../database/index.database.js'

const getByActivity = async (ActivityId) => {
  const responses = await Response.findAll({
    where: {
      ActivityId,
    },
  })

  return { code: 200, responses }
}

const getByStudent = async (StudentId) => {
  const responses = await Response.findAll({
    where: {
      StudentId,
    },
  })

  return { code: 200, responses }
}

const getStudentByActivity = async (ActivityId, StudentId) => {
  const responses = await Response.findAll({
    where: {
      ActivityId,
      StudentId,
    },
  })

  return { code: 200, responses }
}

export { getByActivity, getByStudent, getStudentByActivity }
