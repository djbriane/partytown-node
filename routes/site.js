module.exports = function(app){

    /*
    * GET home page.
    */
    app.get('/', function(req, res){
        res.render('index', {title:'PARTY TOWN'});
    });

    /*
    * GET about page.
    */
    app.get('/about', function(req, res){
        res.end('The best pest store ever');
    });
};