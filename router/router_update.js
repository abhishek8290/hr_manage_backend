const router=require('express').Router();
const user = require('../models/user');
router.post('/',(req,res)=>{
    const email = req.body.email;
    user.findOneAndDelete({email:email}).then(user => res.json(user)).catch(err=>console.log(err));
    const newUser = new user({
        name : req.body.name,
        email: req.body.email
    });
    newUser.save().then(user => res.json(user)).catch(err=>console.log(err)); 
});
module.exports= router;