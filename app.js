const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) =>{
	res.render('home')
})

app.listen(8000, err=> {
	if(err) throw err
		console.log('App is running....')
})