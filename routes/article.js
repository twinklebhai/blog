const express=require('express');
const router=express.Router();
 const app=express();

const schema=require('./../model/users');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


router.get('/new',(req,res)=>{
res.render('pages/newarticle',{data: new schema()});
});

router.get('/:id',async(req,res)=>{
 const data= await schema.findById(req.params.id);
if(data==null) res.render('/');
res.render('pages/display',{article:data});
});


//code for edit 
router.get('/edit/:id', async(req,res)=>{ 
try
{
var data=await schema.findById(req.params.id);
 res.render('pages/edit',{article : data});
}
catch(e)
{
}


});






router.post('/',async(req,res)=> { 
var  newdata=new schema({ title:req.body.title,content:req.body.content,comment: []});
try{
newdata= await newdata.save();
console.log("newdata is             ",newdata);
res.redirect(`/articles/${newdata.id}`);
console.log("return value from await keyword",newdata);

}
catch(e)
{
	console.log(e);
}
});


router.put('/:id', async (req,res)=>{
var data=await schema.findById(req.params.id);
data.title=req.body.title;
data.content=req.body.content;
try
{
var updateddata= await data.save();
console.log(updateddata);
res.redirect('/');
}
catch(e)
{
console.log(e);
}

});
router.delete('/:id',async(req,res)=>{ 
await schema.findByIdAndDelete(req.params.id);
res.redirect("/");//to go back to the same display page of the post
 });


router.put('/addcomments/:id',async(req,res)=>{
try
{
var data=await schema.findById(req.params.id);
data.comment.push(req.body.comment);
console.log(" data after commenting         ",data);
var updateddata=await data.save();
res.render('pages/display',{article :data});


}
catch(e)
{
console.log(e);
}


});



module.exports = router;