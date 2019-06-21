module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    'Restaurant',
    {
      camis: DataTypes.INTEGER,
      dba: DataTypes.TEXT,
      boro: DataTypes.TEXT,
      building: DataTypes.TEXT,
      zip: DataTypes.TEXT,
      phone: DataTypes.TEXT,
      cuisineDescription: DataTypes.TEXT,
      inspectionDate: DataTypes.DATEONLY,
      action: DataTypes.TEXT,
      violationCode: DataTypes.TEXT,
      criticalFlag: DataTypes.TEXT,
      score: DataTypes.INTEGER,
      grade: DataTypes.ENUM(['A','B','C','D','F' ]),
      gradeDate: DataTypes.DATEONLY,
      recordDate: DataTypes.DATEONLY,
      inspectionType: DataTypes.TEXT
    },
  );
  Restaurant.associate = function (models) {
    // associations can be defined here
   
  };
  return Restaurant;
};
