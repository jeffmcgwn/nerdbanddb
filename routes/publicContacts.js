const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact')

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find({ contact: req.contact }).sort({ date: -1 });
        res.json(contacts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', [auth, [
    check('band', 'Band is required').not().isEmpty()
]
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { band, email, youtube, image, type, blurb, bandcamp, spotify, twitter, facebook, instagram, twitch, patreon, website, snapchat } = req.body;

    try {
        const newContact = new Contact({
            band,
            blurb,
            spotify,
            instagram,
            twitter,
            bandcamp,
            facebook,
            email,
            twitch,
            patreon,
            website,
            snapchat,
            youtube,
            image,
            type,
            user: req.user.id
        })

        const contact = await newContact.save();

        res.json(contact)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router;