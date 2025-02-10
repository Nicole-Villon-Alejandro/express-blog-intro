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
app.get('/api/blog', (req, res) => {

    const blog = [
        {

            title: "Cracker alla barbabietola",
      
            content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
      
                      Cracker di farro
      
                      Cracker di lupini
      
                      Cracker allo zafferano
      
                      Cracker ai semi`,
      
            image: "cracker_barbabietola.avif",
      
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
      
          },
      
    ]





res.json(blog)
})

/*attiviamo il server http; localhost3000*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
