// class based / function based
import React from 'react';
import Nav from './Nav';
// import Header from './Header';
import Footer from './Footer';
// import {Component} from 'react';
import MyState from './MyState';

const App = () =>{
  return (
        <>
        <Nav/>
        {/* <Header/> */}
        <MyState></MyState>
        <Footer/>
        </>
        )
}

// class App extends Component{
//   render(){
//     return (
//     <>
//     <h1>Hello world !</h1>
//     <h1>How are you !</h1>
//     </>
//     )
//   }
// }
export default App;
