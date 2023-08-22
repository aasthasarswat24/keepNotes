import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = ()=>{
  const[addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    //alert("i am clicked");
    setAddItem((prevData)=>{
      return[...prevData,note];
    });
    console.log(note); 
  };
  const onDelete=(id)=>{
    setAddItem((prevData)=>
    prevData.filter((currdata,index)=>{
      return index!==id;
    })
    );
  };
  return(
  <>
    <Header/> 
    <CreateNote passNote={addNote}/>
    {
    addItem.map((val,index)=>{
      return( 
      <Note
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={onDelete}
      />
      );
    })
    }
    <Footer/>
  </>
  );

};

export default App;
