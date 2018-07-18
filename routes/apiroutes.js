var express=require("express"),
	router=express.Router(),
	mongoose=require("mongoose"),
	user=require("../models/userData.js")

mongoose.connect("mongodb://localhost/emailer");	

router.get("/",function(req,res){                   //Find All=> find()  //Make a new one =>create(req.body)  //Find specific=> findById(req.params.id)
	user.find()										//Updata any query=> findOneAndUpdata({_id:req.params.id},req.body,{new:true})
	.then(function(posts){							//Deleting any particular record => remove({_id:req.params.id})
		res.json(posts);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.post("/",function(req,res){
	user.create(req.body)
	.then(function(newPost){
		res.status(201).json(newPost);                                  //one can set the status

	})
	.catch(function(err){
		res.send(err);
	})
});	
router.get("/:postId",function(req,res){
	user.findById(req.params.postId)
	.then(function(foundPost){
		res.json(foundPost);
	})
	.catch(function(err){
		res.send(err);

	})
});
router.put("/:postId",function(req,res){
	user.findOneAndUpdate({_id:req.params.postId},req.body,{new:true})  //findOneAndUpdate
	.then(function(updatedPost){
		res.json(updatedPost);
	})
	.catch(function(err){
		console.log(err);
	})
});
router.delete("/:postId",function(req,res){
	user.remove({_id:req.params.postId})
	.then(function(deletedPost){
		res.json({message:"We deleted it !!"})
	})
	.catch(function(err){
		res.send(err);
	})
})

module.exports=router;