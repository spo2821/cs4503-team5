const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lot', (req, res) => {
	var lotNumber = req.lot
	var lotArray = []
	fs.readFile('lots/' + lotNumber + '.txt', 'utf8' , (err, data) => {
  		if (err) {
    		console.error(err)
    		return
  		}
 		lotArray = data.toString().split("\n");
	})
	res.send(lotArray)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

