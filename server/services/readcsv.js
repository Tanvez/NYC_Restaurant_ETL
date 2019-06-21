const csv = require('fast-csv')
const request = require('request-promise')

const URL = 'https://data.cityofnewyork.us/api/views/43nn-pn8j/rows.csv?accessType=DOWNLOAD'

const csvReadUrl = async (url, arr) =>
   await csv.parseStream(request(url), { headers:true })
      .on('error', error => console.error(error))
      .on("data", (data)=>{
        // console.log("current data: ");
        // console.log(data);
        arr.push(arr)
      })
      .on("end", () => console.log("done reading", arr.length));

module.exports = csvReadUrl