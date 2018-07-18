var mongoose=require("mongoose")
	
var userDataSchema=new mongoose.Schema({
	name:String,
	email:String,
	price:Number,
	date:{
		type:Date,
		default:Date.now
	}
})	
module.exports=mongoose.model("user",userDataSchema);