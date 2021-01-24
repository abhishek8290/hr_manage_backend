const router = require('express').Router();
const user = require('../models/user');
router.post('/',(req,res)=>{
    console.log(req.body);
    const newUser = new user({
        user_id : req.body.user_id,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(user => res.json(user)).catch(err=>console.log(err));   
});
// router.get('/',(req,res)=>{res.send('yaha kaam kar raha ')});
module.exports= router;
