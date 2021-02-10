const User = require('../models/User');

exports.updateInfo = async (req,res) => {
    const {channelDescription, channelCategory, userID} = req.body;
    console.log('this is the incoming request', req.body);
        
        let user = await User.updateOne({_id: userID}, {description: channelDescription, category: channelCategory})
        res.send(user)
        console.log(user,'updated user info')
}

exports.getChannelInfo = async (req,res) => {
    console.log(req.params.id)
    let dbUser = await User.findById(req.params.id)

    let resUser = {
        displayName: dbUser.name,
        avatar: dbUser.avatar,
        channelDescription: dbUser.description
    }

    console.log('user', resUser)
    if(!dbUser) {
        res.send({
            message: 'no user found'
        })
    }else {
    return res.status(200).json(resUser)
    }
}