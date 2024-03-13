const router = require('express').Router();
const { User, Booking } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('./layouts/main', {
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/booking', async (req, res) => {
    try {
        const bookingData = await Booking.findAll(req.params.booking, {
            include: [
                {
                    model: Booking,
                    attributes: [
                        'id',
                        'name',
                        'booking_location',
                        'booking_date',
                        'booking_duration',
                        'booking_description',
                    ]
                }
            ]
        }
        )
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ownerprofile', (req, res) => {
    if (req.session.logged_in) {
        res.render('ownerprofile', {
            logged_in: req.session.logged_in
        });
    } else {
        res.redirect('/login');
    }
})

module.exports = router;