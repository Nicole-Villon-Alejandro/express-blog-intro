/*
1.- npm init
2.- npm i express 
3.- creazione del file git ignore
4.- impostare l'importazione di express
5.- attivare la chiamata al server 



*/

const express = require('express')
const app = express()
const port = 3000


/*attivare*/
app.get('/', (req, res) => {





res.json('')
})

/*attiviamo il server http; localhost3000*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
