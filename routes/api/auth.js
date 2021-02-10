const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const {signup, signin} = require('../../controllers/auth');



//GET api/auth
//desc test route
//access Public
//Grab user info
// router.get('/', auth, async (req,res) => {
    
//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         res.json(user);

//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');

//     }

// })

router.post('/signup',signup)
router.post('/signin', signin)

module.exports = router