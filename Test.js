


import React,{useState} from 'react';
import axios from'axios';
const App = () => {
  const[input,setInput]=useState({
    name:" ",
    mail:" ",
    mnumber:" ",
    booknumber:" "
  })
  const {name, mail ,mnumber, booknumber}=input;
  const handler=e=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const submit=e=>{
e.preventDefault();
axios.post('https://console.firebase.google.com/project/myproject-2643/database/myproject-2643-default-rtdb/data/~2F/mybook.json',
input).then(()=>alert("stored yes"))
  }
  return (
    <div><center style={{padding:"200"}}><form onSubmit={submit}>
      <h1>please ente your details</h1>
      <input type="text" name='name'value={name}onChange={handler}></input><br/>
      <input type="mail" name="mail"value={mail}onChange={handler}></input><br/>
      <input type="text"name='mnumber'value={mnumber}onChange={handler}></input><br/>
      <input type="number"name='booknumber'value={booknumber}onChange={handler}></input><br/>
<button>submit</button>
</form>
      </center>
    </div>
  );
};

export default App;