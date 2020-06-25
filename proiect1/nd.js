const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
const formidable = require('formidable');
const http = require('http');
const url = require('url');

app.get('/', function(req, res) {
    res.sendFile((__dirname + '/proiect.html'));
});

app.get('/abonamente', function(req, res) {
    res.sendFile((__dirname + '/abonamente.html'));
});

app.get('/locatie', function(req, res) {
    res.sendFile((__dirname + '/locatie.html'));
});

app.get('/galerie', function(req, res) {
    res.sendFile((__dirname + '/galerie.html'));
});

app.get('/proiect', function(req, res) {
    res.sendFile((__dirname + '/proiect.html'));
});

app.get('/cerinte', function(req, res) {
    res.sendFile((__dirname + '/cerinte.html'));
});

app.listen(port, (err) => {
	if (err) {
	  return console.log('something bad happened', err)
	}
  
	console.log(`server is listening on ${port}`)
})

app.use(express.static(__dirname + '/proiect1'));
app.use(express.static('static'));

var fis = {
	autentificari: []
 };

 var formati = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function checkCh(x) 
{
	return(formati.test(x));
}

function hasUP(str)
{
    return (/[A-Z]/.test(str));
}

function checkPs(str1, str2)
{
    return str1.includes(str2);
}

app.post('/abonamente', function(req, res)
 {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		let ok = 1;
		let user = fields.username;
		let pass = fields.parola;
		let tel = fields.phone;
		let ag = fields.age;
		let nick = fields.nickname;
		let n = tel.startsWith("07");
		let nr = tel.length;
		if(n==false || nr!=10)
		{
			ok=0;
		}
		let ag1 = Number(ag);
		if(ag1<18)
		{
			ok=0;
		}
		if(checkCh(user)==true)
		{ok=0;}
		if(hasUP(nick)==true)
		{ok=0;}
		if(checkPs(pass, user)==true || checkPs(user, pass)==true)
		{ok=0;}
		let date = new Date();
		let h = date.getHours();
		let m = date.getMinutes();
		if(ok)
		{
		fis.autentificari.push({name:user, password:pass, telefon:tel,  varsta:ag, porecla:nick, hour:h, minute:m});
		let data = JSON.stringify(fis);
		fs.writeFileSync('static/register.json', data);
		}
		res.sendFile((__dirname + '/abonamente.html'));
	});
});

