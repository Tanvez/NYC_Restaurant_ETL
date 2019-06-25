'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
      queryInterface.createTable('restaurants', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        camis: {
          type:Sequelize.INTEGER,
          allowNull: false
        },
        dba: {
          type:Sequelize.TEXT,
          allowNull: false
        },
        street: {
          type:Sequelize.TEXT
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
        violationDescription: {
          type:Sequelize.TEXT
        },
        criticalFlag: {
          type:Sequelize.TEXT
        },
        score: {
          type:Sequelize.INTEGER
        },
        grade: {
          type:Sequelize.TEXT
        },
        gradeDate: {
          type:Sequelize.DATEONLY
        },
        recordDate: {
          type:Sequelize.DATEONLY
        },
        inspectionType: {
          type:Sequelize.TEXT
        },
        createdAt: {
          // allowNull: true,
          type: Sequelize.DATE,
        },
        updatedAt: {
          // allowNull: false,
          type: Sequelize.DATE,
        }
      })
  ,
  down: (queryInterface, Sequelize) =>
      queryInterface.dropTable('restaurants')
};
