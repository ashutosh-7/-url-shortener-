
const Url=require('../models/Url');
const shortId = require('shortid');

exports.getHome = (req,res,next) => {
    res.render('index',{
        pageTitle:'Url Shortener',
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
    .then(urlExits=>{
        console.log("I am here");
        // if(urlExists)
        // {
        //     console.log("I am here 2");
            //url already exists
        //     res.render('index',{
        //         pageTitle:'Url Shortener',
        //         shortUrl:`http://localhost:3000/${urlExist.shortId}`
        //     });
        //     return;
        // }
        // else
        // {
            console.log("I am here 3");
            const shortUrlNew=shortId.generate();
            const newUrl= new Url({   //instance of the url model
                urlExits,
                shortUrlNew,
            });
            newUrl.save()
            .then(urlExist => {
                // req.flash('success_msg','Url generated Successfully!');
                res.render('index',{
                    pageTitle:'Url Shortener',
                    shortUrl:`http://localhost:3000/${urlExist.shortId}`
                });
            })
            .catch(err=> {
                console.log(err);
            });
        // }
    })
    .catch(err=>{
        console.log("I am here 4");
        console.log("handle errors");
    });



  res.send();
}