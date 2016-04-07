function envio1(){
	var http = require("https");

	var options = {
	  "method": "PUT",
	  "hostname": "0ab5359e-3974-4e76-84ce-e6ab3448dd00-bluemix.cloudant.com",
	  "port": null,
	  "path": "/datos/d600cee17c26016e6a29f95aa5caf57d",
	  "headers": {
	    "content-type": "application/json",
	    "cache-control": "no-cache",
	    "postman-token": "ef7dd7f8-8cf0-a493-e34a-327478aec3f0"
	  }
	};

	var req = http.request(options, function (res) {
 	var chunks = [];

	  res.on("data", function (chunk) {
	    chunks.push(chunk);
	  });

	  res.on("end", function () {
	    var body = Buffer.concat(chunks);
	    console.log(body.toString());
	  });
	});

	req.write(JSON.stringify({ _id: '600cee17c26016e6a29f95aa5caf57d',
	  _rev: '12-48582ba5faf441bc7e8580dc7d712323',
	  name: 'camilo',
	  pass: '112347' }));
	req.end();
}