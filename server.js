const express=require('express');
const app=express();
const{users}=require('./usermodel');
const{users2}=require('./usermodel2');
const{cust}=require('./um');


const{users3}=require('./usermodel3');

const mongoose=require('mongoose');
const bp=require('body-parser');
app.use(express.json())
const cors=require('cors');
app.use(bp.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://SARAN1:SARAN1@cluster0.2qx9w.mongodb.net/GYM_DB")
.then(() => {
    console.info('connect successfully')
})
.catch(() => {
    console.error('connection error');
});

app.get('/index',async(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get('/feedback',async(req,res)=>{
    res.sendFile(__dirname+"/feedback.html")
})
app.get('/register',async(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})
app.get('/workout',async(req,res)=>{
    res.sendFile(__dirname+"/workoutdetail.html")
})
app.get('/admin',async(req,res)=>{
    res.sendFile(__dirname+"/admin.html")
})
app.get('/adminpage',async(req,res)=>{
    res.sendFile(__dirname+"/adminpage.html")
})
app.get('/display',async(req,res)=>{

    res.sendFile(__dirname+"/display.html")
})
app.get('/display2',async(req,res)=>{
    res.sendFile(__dirname+"/display2.html")
})
app.get('/display3',async(req,res)=>{
    res.sendFile(__dirname+"/display3.html")
})


app.get('/:file',async(req,res)=>{
    res.sendFile(__dirname+"/"+req.params.file)
})
app.get('/get', async (req,res)=>{
   
    // const email=req.body.email;
    const data= await users.find();
    // {"email":email}
   //console.log(data.length);
    res.json(data);
  
})

app.get('/get2', async (req,res)=>{
   
    // const email=req.body.email;
    const data1= await users2.find();
    // {"email":email}
   //console.log(data.length);
    res.json(data1);
  
})
app.post+('/get3', async (req,res)=>{
   console.log("hi")
    // const email=req.body.email;
    const data1= await users3.find();
    // {"email":email}
   //console.log(data.length);
    res.json(data1);
  
})
app.post('/delete', async (req,res)=>{
    const mrg=req.body.mrg;
    const data= await users.find({"mrg":mrg});
    await users.deleteOne(data[0]);
    console.log(data.length);
    res.json({data}); 
})

app.post('/cuslog', async (req,res)=>{
    console.log("hi")
    const name=req.body.name;
    const pass=req.body.pass;
    const data= await cust.find({"name":name,"pass":pass});
   console.log(data);
   if(data==[]){
    res.json({data}); 
   }
})
app.post('/insert4', async (req,res)=>{
    const name=req.body.name;
    const pass=req.body.pass;
    var user=new cust();
    user.name=name;
    user.pass=pass;
   await user.save();
   
   
    res.json({data}); 
})


app.post("/insert",async(req,res)=>
{
   // console.log("hi jgre");
    var user=new users();

    user.mrg=req.body.mrg;
    user.aft=req.body.aft;
    user.eve=req.body.eve;
    user.nig=req.body.nig;

    //console.log(user);
    await user.save();
    ///console.log("done");
});

app.post("/insert3",async(req,res)=>
{
    console.log("hi jgre");
    var user3=new users3();

    user3.name=req.body.name;
    user3.pno=req.body.pno;
    user3.email=req.body.email  ;
    user3.add=req.body.add;
    user3.h1=req.body.h1;
    user3.w1=req.body.w1;
   // user3.dob=req.body.dob;
    console.log(user3);
    await user3.save();
    console.log("done");
});

app.post("/insert2",async(req,res)=>
{
   // console.log("hi jgre");
    var user2=new users2();

    user2.fname=req.body.fname;
    user2.lname=req.body.lname;
    user2.email=req.body.email;
    user2.gen=req.body.gen;
    user2.feed=req.body.feed;

    console.log(user2);
    await user2.save();
    ///console.log("done");
});

app.listen(5000,function(){
    console.log("ok1");
})



// app.get('/index',async(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })