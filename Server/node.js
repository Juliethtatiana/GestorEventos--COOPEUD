const { Client } = require('pg');

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'GestorEventos',
    port: 5432,
  }
  const client = new Client(connectionData)

  client.connect()
client.query('SELECT * FROM asociado')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })
    function insert(){

    }