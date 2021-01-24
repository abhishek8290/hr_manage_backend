const router=require('express').Router();
const user = require('../models/user');
router.post('/',(req,res)=>{
    const email = req.body.email;
    console.log(email);
    user.findOne({email:email}).then(user => res.json(user)).catch(err=>console.log(err));
    // user_temp ? res.json(user_temp):console.log('error');
});
module.exports= router;