const express = require('express'); 
const path = require('path');
const rootDir = require('./util/path.js');
const bodyParser =require('body-parser');
const errorControllers = require('./controllers/error');
const mongoose = require('mongoose');
const indexRoutes=require('./routes/index');
// const MongoDBStore = require('connect-mongodb-session')(session);

const app=express();

app.use(bodyParser.json());  //we are dealing with json
app.use(bodyParser.urlencoded({extended : false})); //parsing the post request datas
app.use(express.static(path.join(rootDir,'public'))); //including public folder accesseible like css and other stuffs in public folder are now accessible
app.set('view engine','ejs');  //express ko batata hai hum by deafult kaun sa templating engine use kar rahe
app.set('views','views'); 


//Db connection
// const MONGODB_URI=require('./config/keys').MongoURI; //db keys
// mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
// .then(()=>{
//     console.log("Database Connection established");
// })
// .catch(err=>{
//     console.log(err);
// });


// //express session middlewares
// const store= new MongoDBStore({
//   uri:MONGODB_URI,
//   collection:'sessions',
// });


// Global variables -> saare views mai hum es variables ko use kar skte hai
// app.use(function(req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.isAuthenticated = req.session.isUserLoggedIn;
//     res.locals.isAdmin = req.session.isAdminLoggedIn;
//     res.locals.csrfToken = req.csrfToken();
//     next();
//   });

app.use(indexRoutes);
  
app.use(errorControllers.get404);

app.listen(process.env.PORT || 3000);