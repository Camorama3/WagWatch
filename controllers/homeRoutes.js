const router = require('express').Router();
const { User, Booking } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
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
        });
// added in booking data render
        const booking = bookingData.get({ plain: true});
        res.render('booking', {
            ...booking,
            logged_in: res.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ownerprofile', withAuth, (req, res) => {
    if (req.session.logged_in) {
        res.render('ownerprofile', {
            logged_in: req.session.logged_in
        });
    } else {
        res.redirect('/login');
    }
});
// added in login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/ownerprofile');
      return;
    }
    res.render('login');
  });

module.exports = router;