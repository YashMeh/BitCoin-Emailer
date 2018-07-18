var express=require('express'),
	bodyParser=require("body-parser"),
	app=express(),
	port=process.env.port ||3000,
	mongoose=require("mongoose"),
	nodemailer=require('nodemailer'),
	xoauth2=require('xoauth2'),
	post=require("./models/userData"),
	request=require('request')


app.use(express.static('public'));
app.use(express.static(__dirname+'/views'));  	
mongoose.connect("mongodb://localhost/emailer");
//Importing Routes
var apiroutes=require("./routes/apiroutes");
	homeroutes=require("./routes/homeroutes");

app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/users",apiroutes);
app.use(homeroutes);
//Connecting to api
// setInterval(function(){
// 	receivingData();

// },300000000);
setInterval(function(){
	console.log(currentbit());
},30000);
var currentbit=function(){
	request('https://blockchain.info/ticker',function(err,response,body){
		if(!err && response.statusCode==200){
			var pdata=JSON.parse(body);
			var cost=pdata.INR.last;
			request('http://localhost:3000/api/users',function(err,response,body2){
		if(!err && response.statusCode==200){
			var pdata2=JSON.parse(body2);
			
			// pdata.forEach(function(user){
			// 	if user.price>=currentbit()
			// 		sendingEmail(user.email,user.name,currentbit())
			// })
			for(var i=0;i<pdata2.length;i++){
				if (pdata2[i].price>=cost){
					console.log("Reached There");
					sendingEmail(pdata2[i].email,pdata2[i].name,cost,pdata2[i].price);
				}
				else{
					console.log(cost)
				}
			}


		}
	})
			
		}
	})

}
// var receivingData=function(){
// 	console.log("Started");
// 	request('http://localhost:3000/api/users',function(err,response,body){
// 		if(!err && response.statusCode==200){
// 			var pdata=JSON.parse(body);
			
// 			// pdata.forEach(function(user){
// 			// 	if user.price>=currentbit()
// 			// 		sendingEmail(user.email,user.name,currentbit())
// 			// })
// 			for(var i=0;i<pdata.length;i++){
// 				if (pdata[i].price>=0){
// 					console.log("Reached There");
// 					sendingEmail(pdata[i].email,pdata[i].name,currentbit());
// 				}
// 			}


// 		}
// 	})
// }

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        clientId: ,
        clientSecret:
    }
});

var sendingEmail=function(receiver,name,amount,price){transporter.sendMail({
    from: 'ym1962956@gmail.com',
    to: receiver,
    subject: 'BitCoin Price',
    text: 'Hey'+" "+name+","+" "+"the newprice for BitCoin is ₹"+amount+" "+"and you wanted to know when the price hits below"+" ₹"+price,
    auth: {
        user: ,
        refreshToken: ,
        accessToken: ,
        expires: 1484314697598
    }
},function(err){
	if(err)
		console.log(err)
	else
		console.log('Email Sent')
});
}
app.listen(port,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Server running on port"+port);
	}
})