import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import {
  activityService,
  optionFlashService,
  optionQuizzService,
  outputBattleService,
  questionFlashService,
  questionQuizzService,
} from '../../services/index.services.js'

const createActivity = async (req, res) => {
  try {
    const data = req.body
    const image = req.file

    const dataActivity = {
      total_time: parseInt(data.total_time),
      total_score: parseInt(data.total_score),
      activities_count: parseInt(data.activities_count),
      created_at: data.created_at,
      due_date: data.due_date,
      type: data.type,
      ClassId: data.ClassId,
    }

    let poster = null
    if (image) {
      poster = await cloudinaryHelper.uploadImage(
        'activities',
        image.buffer,
        image.originalname
      )
    }

    const { code, activity } = await activityService.registerActivity({
      ...dataActivity,
      poster,
    })

    if (activity) {
      const questionsData = []
      for (let i = 0; i < parseInt(data.activities_count); i++) {
        const question = {
          question: data[`activity_${i}_question`],
          time_limit: parseInt(data[`activity_${i}_time_limit`]),
          score: parseInt(data[`activity_${i}_score`]),
          feedback: data[`activity_${i}_feedback`],
          ActivityId: activity.id,
        }

        const { code, questionQuizz } =
          await questionQuizzService.registerQuestionQuizz(question)

        for (let j = 0; j < 4; j++) {
          const option = {
            option: data[`activity_${i}_answer_${j}_option`],
            isCorrect: data[`activity_${i}_answer_${j}_isCorrect`] === 'true',
            QuestionQuizzId: questionQuizz.id,
          }

          await optionQuizzService.registerOptionQuizz(option)
        }

        questionsData.push(questionQuizz)
      }

      return questionsData.length == activity.activities_count
        ? res.status(201).json({
            code: 201,
            message: 'Actividad creada con éxito',
          })
        : res.status(400).json({
            message:
              'No se pudo crear la actividad. Verifique e intente de nuevo',
          })
    }

    return res.status(400).json({
      message: 'Error al intentar crear la actividad. Intente de nuevo',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const createLightningActivity = async (req, res) => {
  try {
    const data = req.body
    const dataActivity = {
      total_time: parseInt(data.total_time),
      total_score: parseInt(data.total_score),
      activities_count: parseInt(data.activities_count),
      created_at: data.created_at,
      due_date: data.due_date,
      type: data.type,
      ClassId: data.ClassId,
    }

    const { code, activity } = await activityService.registerActivity(
      dataActivity
    )

    if (activity) {
      const questionsData = []
      for (let i = 0; i < parseInt(data.activities_count); i++) {
        const question = {
          question: data[`activity_${i}_question`],
          code: data[`activity_${i}_code`],
          time_limit: data[`activity_${i}_time_limit`],
          score: data[`activity_${i}_score`],
          feedback: data[`activity_${i}_feedback`],
          ActivityId: activity.id,
        }

        const { code, questionFlash } =
          await questionFlashService.registerQuestionFlash(question)

        for (let j = 0; j < 4; j++) {
          const option = {
            option: data[`activity_${i}_answer_${j}_option`],
            isCorrect: data[`activity_${i}_answer_${j}_isCorrect`] === 'true',
            QuestionFlashId: questionFlash.id,
          }

          await optionFlashService.registerOptionFlash(option)
        }
        questionsData.push(questionFlash)
      }

      return questionsData.length === activity.activities_count
        ? res
            .status(201)
            .json({ code: 201, message: 'Actividad creada con éxito' })
        : res.status(400).json({
            message:
              'No se pudo crear la actividad. Verifique e intente de nuevo',
          })
    }
    return res.status(400).json({
      message: 'Error al intentar crear la actividad. Intente de nuevo',
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const createBrainBoostActivity = async (req, res) => {
  try {
    const data = req.body
    const dataActivity = {
      total_time: parseInt(data.total_time),
      total_score: parseInt(data.total_time),
      activities_count: parseInt(data.activities_count),
      created_at: data.created_at,
      due_date: data.due_date,
      type: data.type,
      ClassId: data.ClassId,
    }
    const { code, activity } = await activityService.registerActivity(
      dataActivity
    )

    if (activity) {
      const questionsData = []
      for (let i = 0; i < parseInt(data.activities_count); i++) {
        const question = {
          problem: data[`activity_${i}_problem`],
          code: data[`activity_${i}_code`],
          time_limit: data[`activity_${i}_time_limit`],
          score: data[`activity_${i}_score`],
          feedback: data[`activity_${i}_feedback`],
          expected_output: data[`activity_${i}_expected_output`],
          ActivityId: activity.id,
        }

        const { code, outputQuestion } =
          await outputBattleService.registerOutputBattle(question)
        questionsData.push(outputQuestion)
      }

      return questionsData.length === activity.activities_count
        ? res.status(201).json({
            message: 'Actividad creada con éxito',
          })
        : res.status(400).json({
            message:
              'No se pudo crear la actividad. Verifique e intente de nuevo.',
          })
    }
    return res.status(400).json({
      message: 'Error al intentar crear la actividad. Intente de nuevo',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { createActivity, createLightningActivity, createBrainBoostActivity }
