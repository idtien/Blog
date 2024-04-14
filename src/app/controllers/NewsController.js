class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('News')
    }

    // [GET] /news/:slug
    details(req, res) {
        res.send('Details News Page')
    }
}


module.exports = new NewsController