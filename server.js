var express = require("express");
var app = express();
var userInfo = {
	ip_address: "",
	language: "",
	software: ""
};

app.use(function (req, res) {
	userInfo.ip_address = req.ip;
	userInfo.language = req.headers["accept-language"];
	userInfo.software = req.headers["user-agent"];

	res.writeHead(200, {"Content-Type": "text/JSON"});
	res.end(JSON.stringify(userInfo));
});

// Use Heroku port
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});