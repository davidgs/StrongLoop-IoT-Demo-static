module.exports = function (loopbackApplication, options){
   loopbackApplication.use(options.path, function(req, res, next) {
	res.send('All Sensors Component');
   });
};
