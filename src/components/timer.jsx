import React, {useState} from "react";


function Timer()
{
	const newDate = new Date();
	const options = {
		weekday:"long",
		year:"numeric",
		month:"long"
	}
	const initTimer = newDate.toLocaleTimeString("en-US", options);
	// const initTimer = newDate.toLocaleTimeString();
	const [now, setTimer] = useState(initTimer);
	setInterval(refreshTime,1000);
	function refreshTime()
	{
		const newTime = new Date().toLocaleTimeString("en-US", options);
		setTimer(newTime);
	}
	return (
		<div className = "timer">
			<p>{now}</p>
		</div>
	)
}



export default Timer;