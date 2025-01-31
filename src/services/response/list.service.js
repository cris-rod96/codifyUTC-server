import { Response, User } from '../../database/index.database.js'

const getAll = async () => {
  const responses = await Response.findAll({
    include: [
      {
        model: User,
        attributes: ['password'],
      },
    ],
  })

  return { code: 200, responses }
}

const getByActivity = async (ActivityId) => {
  const responses = await Response.findAll({
    where: {
      ActivityId,
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ['password'],
        },
      },
    ],
    order: [['score_total', 'DESC']],
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

export { getAll, getByActivity, getByStudent, getStudentByActivity }
