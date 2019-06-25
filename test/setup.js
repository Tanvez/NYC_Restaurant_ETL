const db = require('../server/db/models');

db.sequelize.sync({ force: true })
  .then(async () => {
    await Promise.all([
      db.restaurant.create({
        "id": 160520,
        "camis": 41664038,
        "dba": "SIMPLY BAKERY",
        "boro": "MANHATTAN",
        "street": "BAYARD STREET",
        "building": "70",
        "zip": "10013",
        "phone": "2127751188",
        "cuisineDescription": "Bakery",
        "inspectionDate": "2019-06-21",
        "action": "Violations were cited in the following area(s).",
        "violationCode": "08A",
        "violationDescription": "Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist.",
        "criticalFlag": "Not Critical",
        "score": 11,
        "grade": "A",
        "gradeDate": "2019-06-21",
        "recordDate": "2019-06-23",
        "inspectionType": "Cycle Inspection / Initial Inspection",
        "createdAt": "2019-06-24T16:58:54.929Z",
        "updatedAt": "2019-06-24T16:58:54.929Z"
      })
    ]);
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
