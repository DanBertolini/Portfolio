const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res, next) =>{
    res.send({
        Teste: "ok"
    })
})
app.use('/', router);
var config = {
    database: 'mongodb://localhost/portal_estudos'
};
require('./config/mongodb')(config);

app.listen(process.env.port || 3000);
console.log('Listening on port: ' + (process.env.port || 3000));
