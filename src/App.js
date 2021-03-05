import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const students = ['Rasel', 'Karim', 'Rashed']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier Element', price: '$249.99'}
]

  return (
    <div className="App">
      <header className="App-header">
        <p>my first react paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            students.map(student => <li>{student}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {/* {
          products.map(pd => <Product product={pd}></Product>)
        } */}
        <Products name={products[0].name} price={products[0].price}></Products>
        <Products name={products[1].name} price={products[1].price}></Products>
        <Person name="Mahfuj" varsity="DIIT"></Person>
        <Person name="Rakib" varsity="MIST"></Person>
        <Person name="Rahim" varsity="IST"></Person>
        <Person name={students[0]}></Person>
      </header>
    </div>
  );
  function Counter(){
    const [count, setCount] = useState(0);
    //const handleIncrease = () => setCount(count + 1);
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    )
  }
  function Users(){
    const [users, setUser] = useState([]);
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])
    return(
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }
}
function Products(props){
  const productStyle={
    margin: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'gray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  //const {name, price} = props.products;
  return (
    <div style={productStyle}>
      <h4>Name: {props.name}</h4>
      <p>Price: {props.price}</p>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border: '2px solid blue',
    color: 'white',
    backgroundColor: 'green',
    margin: '10px',
    width: '500px' 
  }
  return (
    <div style={personStyle}>
      <h1>name: {props.name}</h1>
      <h3>varsity: {props.varsity}</h3>
      <h5>students info</h5>
    </div>
  )
}

export default App;
