const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/lot/:lotNumber', (req, res) => {
	var lotNumber = req.params.lotNumber
	fs.readFile('lots/' + lotNumber + '.txt', 'utf8' , (err, data) => {
  		if (err) {
    		console.error(err)
    		return
  		}
 		var lotArray = data.toString().split("\n")
 		var respons = {} 
 		
 		for (int i = 0; i < lotArray.length; i++) {
 			var smallArray = lotArray[i].split(" ")
 			respons[i] = smallArray
 		}
 		
 		res.send(respons)
	})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

