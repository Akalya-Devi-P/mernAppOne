var express = require('express');
const User = require('../Schema/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = User.find();
  res.send(data);
});

router.post("/register",async(req,res)=>{
  try {
    const {name,email,password,mobile} = req.body;
    const user = await User.findOne({email})
    if(user){
      res.status(400).json({
        message:"User Already Exists"
      })
    }else{
      const record = await new User({name,email,password,mobile}).save();
      console.log(record)
      res.status(200).json({
        message:"record Added",
      })
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

module.exports = router;
