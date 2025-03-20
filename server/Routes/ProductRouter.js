const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Biryani",
            price: 250
        },
        {
            name: "lassi",
            price: 20
        },
        {
            name: "Roti",
            price: 40
        }
    ])
});

module.exports = router;