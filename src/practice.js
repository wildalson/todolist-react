
usrinput = "Google"
function ma(location)
{
	return new Promise((resolve, reject) =>
	{
		if(location === "Google")
		{
			resolve("visited google");
		}
		else{
			reject("visited other websites");
		}
	}) }
	
	function processRequest(request){
		return new Promise((resolve,reject) =>
		{
			console.log("processed");
			resolve("extra info" + request);
		});
	}