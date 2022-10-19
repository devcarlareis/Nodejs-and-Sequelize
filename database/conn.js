const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodejssequelize', 'root', 'qwe123!@#', {
    host: 'localhost',
    dialect: 'mysql'
})
/*
try {
    sequelize.authenticate()
    console.log('conectamos com sucesso')
} catch (error) {
    console.log('não foi possivel conectar: ', error)
}
*/
module.exports = sequelize