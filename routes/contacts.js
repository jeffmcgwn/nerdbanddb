const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact')

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
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
            youtube,
            twitch,
            patreon,
            website,
            snapchat,
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



// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { band, email, youtube, image, type, blurb, bandcamp, spotify, twitter, facebook, instagram, twitch, patreon, website, snapchat } = req.body;

    // Build contact object
    const contactFields = {};

    if(band) contactFields.band = band;
    if(email) contactFields.email = email;
    if(image) contactFields.image = image;
    if(youtube) contactFields.youtube = youtube;
    if(blurb) contactFields.blurb = blurb;
    if(bandcamp) contactFields.bandcamp = bandcamp;
    if(spotify) contactFields.spotify = spotify;
    if(twitter) contactFields.twitter = twitter;
    if(facebook) contactFields.facebook = facebook;
    if(instagram) contactFields.instagram = instagram;
    if(twitch) contactFields.twitch = twitch;
    if(patreon) contactFields.patreon = patreon;
    if(website) contactFields.website = website;
    if(snapchat) contactFields.snapchat = snapchat;
    if(type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contact not found' })

        // Make sure user owns contact
        if(contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        contact = await Contact.findByIdAndUpdate(req.params.id, 
            { $set: contactFields },
            { $new: true });

            res.json(contact)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contact not found' })

        // Make sure user owns contact
        if(contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        await Contact.findByIdAndRemove(req.params.id);

            res.json({ msg: 'Contact removed' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


module.exports = router;