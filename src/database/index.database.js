import { Sequelize } from 'sequelize'
import { CONNECTION } from '../config/database.config.js'
import { models } from '../models/index.models.js'

const sequelize = new Sequelize(CONNECTION.URI, CONNECTION.CONFIG)

models.forEach((model) => model(sequelize))

const {
  Activity,
  Class,
  Course,
  CourseStudent,
  OptionFlash,
  OptionQuizz,
  OutputBattle,
  Piece,
  Puzzle,
  QuestionFlash,
  QuestionQuizz,
  Response,
  Score,
  Support,
  Topic,
  User,
  Code,
  QuizzResponse,
  LightningResponse,
} = sequelize.models

User.hasMany(Course, { foreignKey: 'TeacherId', as: 'CourseTaught' })
Course.belongsTo(User, { foreignKey: 'TeacherId', as: 'Teacher' })

User.belongsToMany(Course, {
  through: CourseStudent,
  foreignKey: 'StudentId',
  as: 'EnrolledCourses',
})

Course.belongsToMany(User, {
  through: CourseStudent,
  foreignKey: 'CourseId',
  as: 'Students',
})

CourseStudent.belongsTo(User, { foreignKey: 'StudentId', as: 'Student' })
User.hasMany(CourseStudent, { foreignKey: 'StudentId' })

CourseStudent.belongsTo(Course, { foreignKey: 'CourseId', as: 'Course' })
Course.hasMany(CourseStudent, { foreignKey: 'CourseId' })

Course.hasMany(Class, { foreignKey: 'CourseId' })
Class.belongsTo(Course, { foreignKey: 'CourseId' })

Class.hasMany(Topic, { foreignKey: 'ClassId' })
Topic.belongsTo(Class, { foreignKey: 'ClassId' })

Class.hasMany(Activity, { foreignKey: 'ClassId' })
Activity.belongsTo(Class, { foreignKey: 'ClassId' })

Activity.hasMany(QuestionQuizz, {
  foreignKey: 'ActivityId',
  onDelete: 'CASCADE',
  as: 'Questions',
})
QuestionQuizz.belongsTo(Activity, { foreignKey: 'ActivityId' })

QuestionQuizz.hasMany(OptionQuizz, {
  foreignKey: 'QuestionQuizzId',
  onDelete: 'CASCADE',
  as: 'Options',
})
OptionQuizz.belongsTo(QuestionQuizz, { foreignKey: 'QuestionQuizzId' })

Activity.hasMany(QuestionFlash, {
  foreignKey: 'ActivityId',
  onDelete: 'CASCADE',
  as: 'QuestionsLightning',
})
QuestionFlash.belongsTo(Activity, { foreignKey: 'ActivityId' })

QuestionFlash.hasMany(OptionFlash, {
  foreignKey: 'QuestionFlashId',
  onDelete: 'CASCADE',
  as: 'OptionsLightning',
})
OptionFlash.belongsTo(QuestionFlash, { foreignKey: 'QuestionFlashId' })

Activity.hasMany(OutputBattle, { foreignKey: 'ActivityId' })
OutputBattle.belongsTo(Activity, { foreignKey: 'ActivityId' })

Activity.hasMany(Puzzle, { foreignKey: 'ActivityId' })
Puzzle.belongsTo(Activity, { foreignKey: 'ActivityId' })

Puzzle.hasMany(Piece, { foreignKey: 'PuzzleId' })
Piece.belongsTo(Puzzle, { foreignKey: 'PuzzleId' })

User.hasMany(Response, { foreignKey: 'StudentId' })
Response.belongsTo(User, { foreignKey: 'StudentId' })

Activity.hasMany(Response, { foreignKey: 'ActivityId' })
Response.belongsTo(Activity, { foreignKey: 'ActivityId' })

Response.hasMany(QuizzResponse, { foreignKey: 'ResponseId' })
QuizzResponse.belongsTo(Response, { foreignKey: 'ResponseId' })

Response.hasMany(LightningResponse, { foreignKey: 'ResponseId' })
LightningResponse.belongsTo(Response, { foreignKey: 'ResponseId' })

User.hasMany(Score, { foreignKey: 'StudentId' })
Score.belongsTo(User, { foreignKey: 'StudentId' })

Activity.hasMany(Score, { foreignKey: 'ActivityId' })
Score.belongsTo(Activity, { foreignKey: 'ActivityId' })

User.hasMany(Support, { foreignKey: 'UserId' })
Support.belongsTo(User, { foreignKey: 'UserId' })

export {
  sequelize,
  Activity,
  Class,
  Course,
  CourseStudent,
  OptionFlash,
  OptionQuizz,
  OutputBattle,
  Piece,
  Puzzle,
  QuestionFlash,
  QuestionQuizz,
  Response,
  QuizzResponse,
  LightningResponse,
  Score,
  Support,
  Topic,
  User,
  Code,
}
