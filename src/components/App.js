import React, {useState}from "react";
import Header from "./header";
import Form from "./form";
import Note from "./note";

function App() {
  const [items, setItems] = useState([]);	
	function addInput(newItems)
	{
    setItems(prevValue =>
      {
        return [...prevValue, newItems];
      })
	};
  function deleteItems(id)
  {
    setItems(prevValue =>{
      return prevValue.filter((element,index) =>{
      return index !== id; 
     });
    });
  }
  return (
    <div>
      <Header />
      <Form usrInput = {addInput} />
      <div className ="flex-container">
      {items.map((element,index) =>
      {
        return <Note 
        key = {index} 
        id = {index} 
        title={element.title} 
        content={element.content}
        itemDelete = {deleteItems} />;
      })}
      {/* <Note title="123" content="321"/>
      <Note title="123" content="321"/>	
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/>
      <Note title="123" content="321"/> */}
      </div>
    </div>

      )
}

export default App;
