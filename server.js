const express= require('express')
const app = express()
const PORT=8000
const names={
	"ederson":{
		"name": "Ederson Moraes",
		"age": 28,
		"nationality":"Brazil"
	},
	"walker":{
		"name": "Kyle Walker",
		"age": 31,
		"nationality":"England"
	},
	"mahrez":{
		"name": "Mahrez",
		"age": 31,
		"nationality":"Algerian"
	},
	"bernado silva":{
		"name": "Bernado Silva",
		"age": 27,
		"nationality":"Portugal"
	},
	"kdb":{
		"name": "Kevin DeBruyne",
		"age": 30,
		"nationality":"Belgium"
	},
	"dias":{
		"name": "Ruben Dias",
		"age": 24,
		"nationality":"Portugal"
	},
	"stones":{
		"name": "John Stones",
		"age": 28,
		"nationality":"England"
	},
	"rodri":{
		"name": "Rodrigo Hernandez",
		"age": 25,
		"nationality":"Spain"
	},
	"sterling":{
		"name": "Raheem Sterling",
		"age": 27,
		"nationality":"England"
	},
	"pep":{
		"name": undefined,
		"age": undefined,
		"nationality":undefined
	}
}

app.get('/',(request,response)=>{
	response.sendFile(__dirname + '/index.html')
})
app.get('/api',(request,response)=>{
	response.json(names)
})
app.get('/api/:playername',(request,response)=>{
	const lol= request.params.playername.toLowerCase()
	if(names[lol]){
		response.json(names[lol])
	}else{
		response.json(names["pep"])
	}
	// response.json(names)
})

app.listen(process.env.PORT || PORT,()=>{
	console.log(`server is running on port ${PORT}, you better go catch it`)
})