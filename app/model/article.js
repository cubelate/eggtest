const Sequelize = require('Sequelize');
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Article = app.model.define('article', {

        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: STRING(255),
    }, {
        timestamps: false
    });


    return Article;
};