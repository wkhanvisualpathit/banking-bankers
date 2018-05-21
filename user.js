use admin;


db.createUser({
	user:"admin",
	pwd:"admin",
	roles :[
	{role:"read",db:"local"},
	"root","dbAdmin"
	]
})


db.medical.medicalUser.insert({
	"name":"wkhan",
	"email":"wahidkhan@gmail.com",
	"address":[
		{
		"home":"MyHome",
		"colony":"Mycolony",
		"street":"My Street"
		},{
		"home":"Sec Home",
		"colony":"Sec colony",
		"street":"Sec Street"
		}],
	"isMarried":true,
	"number":9999999999
	
})
use medical;
db.createUser({
	user:"mediUser",
	pwd:"mediUser",
	roles:[{role:"read",db:"local"},"dbOwner"],
	customData:{
	"employeeId":1234567	
	}

})




















