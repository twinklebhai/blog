const express=require('express');
const app=express();

const mongoose=require('mongoose');
const schema=require('./model/users');

const methodOverride=require('method-override');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
var path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

mongoose.connect('mongodb+srv://twinklebhai:twinklebhai@cluster0.uaqnl.mongodb.net/postdb?retryWrites=true&w=majority',
{
	useNewUrlParser : true,
	useUnifiedTopology  : true
}).then(()=>{console.log("db connection done")}); 

const articleRoute=require('./routes/article.js');
app.use('/articles',articleRoute);

//app.use('/articles/new',(req,res)=>{ res.render('pages/newarticle'); });//  it will work same as routing code.

app.get('/',async (req,res)=>{ 
const data=await schema.find();
res.render('pages/index',{data : data});
});

app.post('/',(req,res)=>{ 
res.end();
});

app.listen(3000,()=>{console.log('listening on the port 3000')});