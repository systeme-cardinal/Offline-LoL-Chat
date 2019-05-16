const lcu_connect = require('lcu-connector');
const lcuapi = new lcu_connect('');
const got = require("got");

lcuapi.on('connect', (data) => {
    console.log('LeagueClient found!');
    let { protocol, address, port, username, password } = data;
    let authorization = (Buffer.from(`${username}:${password}`)).toString('base64')
  
    got.put(`https://127.0.0.1:${port}/lol-chat/v1/me`, {
        headers: {
            Authorization: 'Basic '+ authorization
        },
        rejectUnauthorized: false,
        body: JSON.stringify({
            availability: 'offline'
        })
    }).catch(err => {
	console.log(err.toString());
	}).then( ok => console.log("Vous êtes maintenant invisible !\nDévelopper par DoctaEnkoda (Bierque Jason)\n"));
  })
  .start();