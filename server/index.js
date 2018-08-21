const app = require("express")(),
	   routes = require("./routes");
	     // cors = require("cors");


app.use('/', routes);


app.listen(3000, ()=> {
	console.log("serving at 3000");
})