import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alamgir','Salman','Mofiz','Shakib khan','Bappi','Modon','Arafin shuvo']
  const products = [
    {name : 'photoshop', price : '$80.66'},
    {name : 'Illastator', price : '$60.50'},
    {name : 'PDF Reader', price : '$40.44'},
    {name : 'Photocrock', price: '$33.20'},
    {name : 'premiar elements', price: '$99.20'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>I am a user of react</h1> */}
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      {/* <Product product = {products[0]}></Product>
      <Product product = {products[1]}></Product>
      <Product product = {products[2]}></Product>
      <Product product = {products[3]}></Product> */}
      </header>
    </div>
  );
}


function Counter(){
  const [count , setCount] = useState(0);

  return(
    <div>
      <h1>count: {count} </h1>
      <button onClick = {() => setCount(count - 1)} >Decrease</button>
      <button onClick = {() => setCount(count + 1)} >Increase</button>
    </div>
  )
}

function Users() {
  const [users , setUsers] = useState([]);
  useEffect (() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
       <ul>
         {
             users.map(user => <li>{user.email}</li>)
         }
       </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border:'2px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightGreen',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return(
    <div style = {productStyle}>
      <h3>{props.product.name}</h3>
     <h5>{props.product.price} </h5>
      <button>Buy now</button>

    </div>

  )
}


export default App