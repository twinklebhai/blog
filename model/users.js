const mongoose=require('mongoose');
let userschema =new mongoose.Schema({ 
				title : String,
				content: String,
				comment:Array
				});
module.exports=mongoose.model('blogs',userschema);