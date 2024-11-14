import { Score } from '../../database/index.database.js'

const getByActivity = async (activity_id) => {
  const scores = await Score.findAll({
    where: {
      ActivityId: activity_id,
    },
  })

  return { code: 200, scores }
}

const getByStudent = async (student_id) => {
  const scores = await Score.findAll({
    where: {
      StudentId: student_id,
    },
  })

  return { code: 200, scores }
}

const getAll = async () => {
  const scores = await Score.findAll()

  return { code: 200, scores }
}

export { getAll, getByActivity, getByStudent }
