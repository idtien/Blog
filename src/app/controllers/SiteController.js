const Post = require('../models/Course')
class SiteController {

    // [GET] /home
    async index(req, res) {
        try {
            const Posts = await Post.find({})
            res.json(Posts)
            // res.render('home')
        } catch (error) {
            console.log('error', error)
        }
        // res.render('home')
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


module.exports = new SiteController