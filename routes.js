'use strict';
const  controller =require('./controller');


// FUNCTION TO MAKE DIFFERENT ROUTER CALL ---> @CONTROLLER DEFINE THE CALL
module.exports = function(app) {
	app.route('/about').get(controller.about);
	app.route('/info/:pincode1').get(controller.getDistance);
	app.get('/', (req, res)=>{
		res.send("Hello  , This is API HOME. ")
	})
	
};

