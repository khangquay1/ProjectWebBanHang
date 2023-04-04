
const homeRoute = require('./home.route');

function route(app) {
    
    app.use('/' , homeRoute);

}

module.exports = route;