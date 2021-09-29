const express=require('express');

const app = express();

const port=process.env.PORT || 4004;
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/admins',name:'Add Author'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/login',name:'Log In'
    },
    {
        link:'/',name:'Log Out'
    }


];



const list=[{
    link:'/login',name:'Login'
},
{
    link:'/signup',name:'Signup'
}
]
const newnav=[{
    link:'/books',name:'Books'
},
{
    link:'/authors',name:'Authors'
}]



const booksRouter=require('./src/routs/bookRouts')(nav);
const authRouter=require('./src/routs/authRouts')(nav);
const addbookrouts=require('./src/routs/addbookrouts')(nav);
const addauthrouter=require('./src/routs/addauthrouts')(nav);
const signrouter=require('./src/routs/signrouts')(list);
const logrouter=require('./src/routs/logrouts')(list);
const indexrouter=require('./src/routs/indexroutes')(list);
const userrouter=require('./src/routs/newuser')(newnav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/admin',addbookrouts)
app.use('/admins',addauthrouter);
app.use('/authors',authRouter);
app.use('/signup',signrouter);
app.use('/login',logrouter);
app.use('/index',indexrouter);
app.use('/',indexrouter);
app.use('/newuser',userrouter);



app.listen(port,()=>{console.log("ready"+port)});
