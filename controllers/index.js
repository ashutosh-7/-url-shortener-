

exports.getHome = (req,res,next) => {
    res.render('index',{
        pageTitle:'Home',
    });
}
exports.postURL = (req,res,next) => {
   res.send();
}