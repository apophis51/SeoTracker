const db = require('./db')
const KeywordData = require('./KeywordData')


// Campus.hasMany(Student )
// // Student.belongsTo(Campus, { as: 'Enrollee' })
// // Student.belongsTo(Campus, { foreignKey: 'EnrolleeId' })
// Student.belongsTo(Campus)


// self-associations in Sequelize, 
// KeywordData.belongsTo(KeywordData, {
//     as: 'Current URL',
//     foreignKey: 'KeywordId'
//   });
  
//   KeywordData.hasMany(KeywordData, {
//     as: 'Keywords',
//     foreignKey: 'KeywordId'
//   });




//   KeywordData.belongsToMany('Keyword', { through: 'Ranking' });
// KeywordData.belongsToMany('Current URL', { through: 'Ranking' });

module.exports = {
  db,
  KeywordData
  // JobApplications
}