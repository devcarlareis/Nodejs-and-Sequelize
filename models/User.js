const { DataTypes } = require('sequelize')

const db = require('../database/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User