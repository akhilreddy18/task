const app = require("express")(),
   routes = require("./routes"),
	 cors = require("cors"),
	 port = 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);
app.use(cors());

app.listen(port, ()=> {
	console.log("serving at " + port);
})