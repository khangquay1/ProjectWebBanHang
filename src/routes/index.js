
const homeRoute = require('./home.route');
const productRoute = require('./product.route');

function route(app) {
    
    app.use('/product' , productRoute);
    app.use('/' , homeRoute);

}

module.exports = route;