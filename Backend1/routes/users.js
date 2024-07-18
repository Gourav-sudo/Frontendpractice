const router=require('express').Router();
let User=require('../models/user.model');

//get all users from database
router.route('/').get((req,res)=>{
User.find()
.then(users=>res.json(users))
.catch(err=>res.status(400).json('Error'+err));
});

//Add data to database
router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const course=req.body.course;

    const newUser=new User({name,email,course});
    newUser.save()
    .then(()=>res.json('User Added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});

//get user by id
router.route('/:id').get((req,res)=>{
User.findById(req.params.id)
.then(user=>res.json(user))
.catch(err=>res.status(400).json('Error:'+err));
});

//delete user by id
router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('User Deleted!'))
    .catch(err=>res.status(400).json('Error:'+err));
});

//Update user by id
router.route('/update/:id').post((req,res)=>{
User.findById(req.params.id)
.then(user=>{
    user.name=req.body.name;
    user.email=req.body.email;
    user.course=req.body.course;

    user.save()
    .then(()=>res.json('User updated!'))
    .catch(err=>res.status(400).json('Error:'+err));
})
.catch(err=>res.status(400).json('Error:'+err));
});
module.exports=router;