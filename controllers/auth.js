const gravatar = require('gravatar');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const User = require('../models/User');




exports.signin = async (req,res) => {
    const { email, password} = req.body;

        try {
            let user = await User.findOne({ email })
    
            if(!user) {
                res.status(400).json({errors:[{ msg: 'Invalid Credentials'}] }).end()
                
            }
    
            const isMatch = await bcrypt.compare(password, user.password);
            
            if(!isMatch) {
                res.status(400).json({errors:[{ msg: 'Invalid Credentials'}] }).end()
            }
            const payload = {
                user: {
                    id: user.id
                }
            }
    
            jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token) => {
                if(err) throw err;
    
                res.json({id: user.id , token: token})
            }
            )
    
        } catch(err) {
            console.error(err.message)
            res.status(500).send('Server Error');
        }
    
}

exports.signup = async (req,res) => {
    const {name, email, password} = req.body;

    try {
        let user = await User.findOne({ email })

        if(user) {
            res.status(400).json({errors:[{ msg: 'User already exists'}] }).end()
            
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();
        
        const payload = {
            user: {
                id: user.id,
            
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token) => {
            if(err) throw err;

            res.json({id: user.id , token: token})
        }
        )

    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }

}