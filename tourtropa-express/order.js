
var express = require('express');
var faker = require('faker');

var router = express.Router();



router.get('/', function(req, res) {
  res.send([
  {	
  "user":"Vlad",
	"price": "800",
	"id":"452124h",
	"services": 
		[
			{
				"name" : "costumes",
				"size":"XL",
				"price": "500"
			},
			{
				"name":"text",
				"price":"300",
				"topic":"Cartoons",
				"duration": "2 minutes"
			}
		],

	"delivery":
	{	
		"city":"Minsk",
		"delivered": "true",
		"time":"iso + date forme: 2017-09-08T10:20Z+3" 
	}
},
{	
	"user":"Elena",
	"price": "300",
	"id":"57642124h",
	"services": 
			{
				"name":"text",
				"price":"300",
				"topic":"Films",
				"duration": "3 minutes"
			},

	"delivery":
	{	
		"city":"Brest",
		"delivered": "true",
		"time":"iso + date forme: 2017-08-17T15:20Z+3" 
	}
}
]
  );
});

router.get('/:id', function(req, res) {
  res.send({ id: req.params.id,
              address: faker.internet.address(),
             format: req.query.details});
});


module.exports = router;
