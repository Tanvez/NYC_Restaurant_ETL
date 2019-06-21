const status = require('http-status')
const { Restaurant } = require('../db/models')

module.exports = router => {
  router.get('/restaurant', async (req, res)=>{
    try{
      const result = await Restaurant.findAll()
      console.log({result})
      res.sendStatus(200)
    }
    catch (e) {
      return res.status(status.BAD_REQUEST)
    }
  })
}