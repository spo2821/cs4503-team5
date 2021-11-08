
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lot1', (req, res) => {
	var blah = {
		"space1": 0,
		"space2": 0,
		"space3": 1,
		"space4": 0,
	};
	res.send(blah);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

