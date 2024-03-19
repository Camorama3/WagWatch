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

router.get('/booking/:id', async (req, res) => {
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

        const booking = bookingData.get({ plain: true});

        res.render('booking', {
            ...booking,
            logged_in: res.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },

        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });

module.exports = router;