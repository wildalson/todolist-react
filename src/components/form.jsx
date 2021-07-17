
import React, {useState} from "react";


function Form(props)

{
	const [input, setInput] = useState({
		title: "",
		content:""
	});
	function controlInput(event)
	{
		const {name, value} = event.target;
		setInput(prevValue =>
			{
				return {...prevValue, [name]:value};
			})
	}
	function handleSubmit(event)
	{
		props.usrInput(input);
		setInput({
			title:"",
			content:""
		});
		event.preventDefault();
	}
	return (
		<div className="form">
		<form>
		<input 
		name= "title" 
		placeholder = "title" 
		onChange = {controlInput} 
		value = {input.title}>
		</input>
		<textarea 
		name= "content"
		placeholder = "click here to type ..." 
		rows="3"
		onChange = {controlInput} 
		value = {input.content}>	
		</textarea>
		<button onClick={handleSubmit}>add</button>
		</form>
	
		
		</div>);
	}

export default Form;
