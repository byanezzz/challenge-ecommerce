import React, { Component } from 'react';
import AddButton from './AddButton';


class App extends Component {
  constructor(props) {
    super(props);    
    
    this.state = {      
      data: null,
    }
  }
  componentWillMount() {    
    fetch('http://localhost:1337/items')
    .then(response => {
      return response.json();
    }).then(data => {
      let items = data.catalog;
      this.setState({
        openOrder: false,
        total: 0,
        sum: 0,
        data: items,
        cart: []              
      })    
    }).catch(error => {
      console.log('error: ' + error);
    })
  }
  
  render() {
    return (
        <ul>
        {this.state.data && this.state.data.map(index => 
            <li key={index.id}>
              <img src={index.imageURL} alt={index.name} key={index.id}/>
              <p key={index.name}>{index.name}</p>
              <p><span>{index.currency}</span>{index.price}</p>
              <AddButton/>
            </li>
          )
        }        
      </ul> 
    );
  }
}
export default App;
















/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 import catalog from '../../../data/mock.json'; */
/* import AddButton from './AddButton';
 */
/* 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentWillMount() {
 let data = [];  
   
    fetch('http://localhost:1337/items')
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      let item=data.catalog;      
    }).then(function(item){
      this.setState({
        data:item      
    }).catch(error => {
      console.log('error: ' + error);
    })
  })
}
  render() {
    return(
      <ul>
        {data && data.map(item => 
            <li key={item.id}>
              <img src={item.imageURL} alt={item.name} key={item.id}/>
              <p key={item.name}>{item.name}</p>
              <p><span>{item.currency}</span>{item.price}</p>
            </li>
        )}        
      </ul>
    );
  }
} */


/* class Menu extends Component {
  constructor(props){
    super(props)
  };
  render(){
    let options=this.props.options
    return(
      <ul>
        {option.map(option=><li>{option}</li>)}
      </ul>
    )
  }
} 
export default App;*/

