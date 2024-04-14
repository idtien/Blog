class NewsController {

    // [GET] /home
    index(req, res) {
        res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }

    // [GET] /about
    about(req, res) {
        res.send('<h1>Hello Im A FE Developer!</h1>')
    }

    // [GET] /address
    address(req, res) {
        res.send('<h1>Hue - VietNam!</h1>')
    }
}


module.exports = new NewsController