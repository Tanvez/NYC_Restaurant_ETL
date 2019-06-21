'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
      queryInterface.createTable('Restaurants', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        camis: {
          type:Sequelize.INTEGER,
          allowNull: false},
        dba: {
          type:Sequelize.TEXT,
          allowNull: false
        },
        boro: {
          type:Sequelize.TEXT,
          allowNull: false
        },
        building: {
          type:Sequelize.TEXT,
          allowNull: false
        },
        zip: {
          type:Sequelize.TEXT, 
          allowNull: false
        },
        phone: {
          type:Sequelize.TEXT,
          allowNull: false
        },
        cuisineDescription: {
          type:Sequelize.TEXT
        },
        inspectionDate: {
          type:Sequelize.DATEONLY
        },
        action: {
          type:Sequelize.TEXT
        },
        violationCode: {
          type:Sequelize.TEXT
        },
        criticalFlag: {
          type:Sequelize.TEXT
        },
        score: {
          type:Sequelize.INTEGER
        },
        grade: {
          type:Sequelize.ENUM(['A','B','C','D','F' ])
        },
        gradeDate: {
          type:Sequelize.DATEONLY
        },
        recordDate: {
          type:Sequelize.DATEONLY
        },
        inspectionType: {
          type:Sequelize.TEXT
        }
      })
  ,
  down: (queryInterface, Sequelize) =>
      queryInterface.dropTable('Restaurants')
};
