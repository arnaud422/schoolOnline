const { default: mongoose } = require('mongoose')

mongoose
    .connect('mongodb+srv://arnaud:' + process.env.DB_PASS + '@cluster0.xb7ma.mongodb.net/schoolOnline')
    .then(()=> console.log('Connecté à la base de donné'))
    .catch(()=> console.log('La connexion avec la BDD a échoué'))