
class ProductController {

    //[GET] /
    index(req, res) {
        res.render('product');
    }

}

module.exports = new ProductController;