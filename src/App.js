import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Users></Users>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])
  return (
    <div>
        <h3>All User Call From API: {users.length}</h3>
        <div>
          {
            users.map(user => <People age={user.dob.age} email={user.email} phone={user.phone} addressNo={user.location.street.number} addressName={user.location.street.name} name={user.name.first} img= {user.picture.medium} ></People>)
          }
        </div>
    </div>
  )
};
function People (props){
  var divClass = {
    height: '200px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#F9F9F9',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
  }
  var pTag ={
    margin: '5px', 
    color: '#2C2E31',
  }
  return(
    <div style = {divClass}>
      <div style= {{}}>
      <img style = {{borderRadius: '50%', paddingTop: '10px'}} src={props.img} alt=""/>
      <p> <span style = {{color:'lightgray'}}> Hi, My Name is</span></p>
      <h3 style = {{color:'#2C2E31'}}>{props.name}</h3>
      </div>
      <div style= {{display:'flex',alignItems:'center', flexDirection:'column', justifyContent:'flex-start', color: 'gray',}}>
        <p style = {pTag}>Email: {props.email}</p>
        <p style = {pTag}>Phone: {props.phone}</p>
        <p style = {pTag}>Address: {props.addressNo} {props.addressName}</p>
        <p style = {pTag}>Age: {props.age}</p>
        
      </div> 
    </div>
  )
}
export default App;
