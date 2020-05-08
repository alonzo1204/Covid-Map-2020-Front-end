const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/angular-forms-validation'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/COVID-MAPA-2020-FRONT-END/index.html'));
});
ngApp.listen(process.env.PORT || 4200);