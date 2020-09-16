
const Url=require('../models/Url');
const shortId = require('shortid');
const { generate } = require('shortid');
const { codePointAt } = require('../util/path');

exports.getHome = (req,res,next) => {
    let generatedUrl='NULL';
    res.render('index',{
        pageTitle:'Url Shortener',
        generatedUrl:generatedUrl
    });
}
exports.postURL = (req,res,next) => {
  const url=req.body.url;
  console.log(url);

    if(!url)
    {
        //handle error agar url nhi aaya toh
    }
   Url.findOne({url:url})
   .then(urlExist=>{
       console.log(urlExist);
       if(urlExist)
       {
        return res.redirect('/');
       }
       const shortUrl=shortId.generate();
       const newUrl=Url ({
           url:url,
           shortId:shortUrl
       });
       let sendUrl=`http://localhost:3000/${shortUrl}`;
       return newUrl.save()
       .then(result=>{
           console.log("saved suucessfully");
           res.render('index',{
               pageTitle:'Url Shortener',
               generatedUrl:sendUrl
           })
       })
       .catch(err=>{
           console.log("Not saved");
       });
       
   })
   .catch(err=>{
    console.log(err);
    res.redirect('/');
   });
}