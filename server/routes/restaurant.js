const status = require('http-status')
const { restaurant:Restaurant, sequelize } = require('../db/models')

// TODO rename model

module.exports = router => {
  router.get('/restaurant/cruisine', async (req, res)=>{
    console.log
    try{
     // TODO PAGINATION OF THE FILTERED RESULT
      const { cuisineDescription, grade} = req.query;
      const result = await Restaurant.findAll(
        {
          where: {
            cuisineDescription: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('cuisineDescription')),
                'LIKE', '%' + cuisineDescription + '%'
              ),
            grade:  [grade ? grade.toUpperCase(): 'A' , 'A'] // grade range if none is provided defaults to A:A
          },
          order:sequelize.literal(`"inspectionDate" DESC`), // sorts result with earliest inspection date
          raw: true
        });
      // Reduces the result to unique names only
      const reducedResult = result.reduce((unique, o) => {
        if(!unique.some(obj => obj.dba === o.dba)) {
          unique.push(o);
        }
        return unique;
      },[]);
      res.status(200).json({result:reducedResult});
    }
    catch (e) {
      console.log(e)
      return res.status(status.BAD_REQUEST)
    }
  })
}