var express=require("express"),
	router=express.Router()
	



router.get("/",function(req,res){
	res.sendFile("homepage.html",{root:__dirname+'/../views'});
})	

module.exports=router;	